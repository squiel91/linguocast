import { ArrowLink } from '@/components/arrow-link'
import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { Input } from '@/components/input'
import { PlatformIcon } from '@/components/platform-icon'
import { Select } from '@/components/select'
import { SuggestionSuccessModal } from '@/components/suggestion-success-modal'
import { Textarea } from '@/components/textarea'
import { LEVELS } from '@/constants/levels.constants'
import { PODCASTS } from '@/data/podcasts.data'
import { Language, Podcast } from '@/types'
import { json, useLoaderData, useParams } from '@remix-run/react'
import axios from 'axios'
import { AlertCircleIcon, FlagIcon, TrashIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const loader = async () => {
  const { data: languages } = await axios.get<{ id: number, name: string }[]>('http://localhost:3001/api/languages')

  return json({ languages })
} 
const SharePodcast = () => {
  const { languages } = useLoaderData<typeof loader>()

  const { podcastId } = useParams()
  let podcast: Podcast | null = null
  if (podcastId) podcast = PODCASTS.find(({ id }) => id === +podcastId)!
  // TODO: if !podcast send to 404
  const isEdit = !!podcast

  const [name, setName] = useState(() => podcast?.name || null)
  const [targetLanguage, setTargetLanguage] = useState(() => podcast?.targetLanguage || null)
  const [mediumLanguage, setMediumtLanguage] = useState(() => podcast?.mediumLanguage || 'english')
  const [description, setDescription] = useState(() => podcast?.description || null)
  const [levels, setLevels] = useState(() => podcast?.levels || [])
  const [links, setLinks] = useState(() => podcast?.links || [''])
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasShared, setHasShared] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    setMediumtLanguage('english')
  }, [targetLanguage])

  const MIN_DESCRIPTION_CHARS = 50
  const MAX_DESCRIPTION_CHARS = 1000

  const submitHandler = async () => {
    try {
      setErrorMessage(null)
      // validation
      if (!name) return setErrorMessage('The show name is required.')
      if (!targetLanguage) return setErrorMessage('The targer language is required.')
      if (!description || description.length < MIN_DESCRIPTION_CHARS || description.length > MAX_DESCRIPTION_CHARS) return setErrorMessage('The show description is required and need to be between 50 and 1000 characters.')
      if (levels.length === 0) return setErrorMessage('At least one level is required.')
      if (links.filter(l => !!l).length === 0) return setErrorMessage('At least one link is required.')
      
      setIsLoading(true)
      const formData = new FormData()
      if (!podcast) {
        formData.append('name', name)
        formData.append('targetLanguage', targetLanguage)
        if (mediumLanguage) formData.append('mediumLanguage', mediumLanguage)
        formData.append('description', description)
        levels.forEach(level => formData.append('levels[]', level))
        links.filter(l => !!l).forEach(link => formData.append('links[]', link))
        if (coverImage) formData.append('coverImage', coverImage);
      } else {
        if (name !== podcast.name) formData.append('Name', name)
        if (targetLanguage !== podcast.targetLanguage) formData.append('Target language', targetLanguage)
        if (mediumLanguage !== podcast.mediumLanguage) formData.append('Medium language', targetLanguage)
        if (description !== podcast.description) formData.append('Description', description)
        for (const level of LEVELS) {
          if ((levels.includes(level)) && !(podcast.levels.includes(level))) formData.append('Added levels', level)
          if ((podcast.levels.includes(level)) && !(levels.includes(level))) formData.append('Removed levels', level)
        }
        for (const link of links) {
          if (!podcast.links.includes(link)) formData.append('Added links', link)
        }
        for (const link of podcast.links) {
          if (!links.includes(link)) formData.append('Removed links', link)
        }
      }
      await axios.post(`http://localhost:3001/api/podcasts`, formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      setHasShared(true)
    } catch (error) {
      setErrorMessage('Ooops! There was an unexpected error. Please try again or contact us.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      <h1 className='text-3xl font-bold mb-8'>Share a Podcast</h1>
      <div className="grid md:grid-cols-3 gap-x-16 gap-y-6 mb-8">
        <p className='mb-8 max-w-3xl md:col-span-2'>
          This is a directory created and mantained by the learning comunity! We encourage you to add as many language learning podcast you know and enjoy.
          Remember that only podcast mainly targeted to language learners will be accepted.
        </p>
        <div className='grid md:col-span-2 gap-6 content-start'>
          <label className='md:col-span-2'>
            <div className='text-sm  mb-2'>Podcast name</div>
            <Input value={name ?? ''} onChange={name => setName(name)} disabled={isLoading} />
          </label>
          <label className='flex gap-2 flex-col'>
            <div className='text-sm'>
              Target language
            </div>
            <Select
              value={targetLanguage}
              options={[
                { value: null, text: '', selectable: false },
                ...languages.map(({ name }) => {
                  return ({ value: name, text: name, append: <FlagIcon /> })
                })
              ]}
              onChange={languageCode => setTargetLanguage(languageCode as Language)}
              disabled={isLoading}
            />
            <div className='text-xs text-slate-500 italic'>
              The primary language that is teaching.
            </div>
          </label>
          <label className='flex gap-2 flex-col'>
            <div className='text-sm'>
              Medium language
            </div>
            <Select
              value={mediumLanguage}
              options={[
                ...languages.map(({ name }) => ({
                  value: name,
                  text: name === targetLanguage ? `${name} (immersive)` : name,
                  append: <FlagIcon />
                }))
              ]}
              onChange={languageCode => setMediumtLanguage(languageCode as Language)}
              disabled={isLoading}
            />
            <div className='text-xs text-slate-500 italic'>
              Language used to provide explanations and translations.
            </div>
          </label>
          <div className='md:col-span-2'>
            <div className='text-sm mb-2'>Level</div>
            <div className='flex gap-x-4 gap-y-2 flex-wrap text-sm flex-col md:flex-row'>
              {LEVELS.map(level => (
                <label key={level} className='flex items-center gap-2 capitalize'>
                  <Checkbox
                    checked={levels.includes(level)}
                    onChange={checked => setLevels(levels => checked
                      ? [...levels, level]
                      : levels.filter(l => l !== level)
                    )}
                    disabled={isLoading}
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>
          <label className='flex flex-col gap-2 md:col-span-2'>
            <div className='text-sm'>
              Description
            </div>
            <Textarea
              value={description ?? ''}
              onChange={value => setDescription(value)}
              disabled={isLoading}
            />
            <div className='text-xs text-slate-500 italic'>
              A brief description of the show and the most salient features about the teaching style, host personality, etc. {
                !description || description?.length < MIN_DESCRIPTION_CHARS
                  ? 'At least 50 characters are required'
                  : description?.length < MAX_DESCRIPTION_CHARS
                    ? `${MAX_DESCRIPTION_CHARS - description.length} characters left`
                    : `You have ${description.length - MAX_DESCRIPTION_CHARS} over the limit`
              }.
            </div>
          </label>
        </div>
        <div className='flex flex-col gap-2'>
          <div>

            <div className='text-sm'>
              Links
            </div>
            <ul className='flex gap-4 flex-col'>
              {links.map((link, index) => (
                <li key={index} className='flex gap-4 items-center'>
                  <Input
                    prepend={
                      <PlatformIcon link={link} className="w-full h-full" />
                    }
                    className='w-full'
                    value={link || ''}
                    onChange={value => setLinks(l => [...l.slice(0, index), value ?? '', ...l.slice(index + 1)])}
                    placeholder='https://'
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => setLinks(l => [...l.slice(0, index), ...l.slice(index + 1)]) }
                    disabled={links.length === 1 || isLoading}
                    className={links.length <= 1 ? 'opacity-30' : ''}
                  >
                    <TrashIcon size={16} className='text-primary' />
                  </button>
                </li>
              ))}
            </ul>
            <p className='text-xs text-slate-500 italic'>
              Add links where to listen and support the show: Apple, Youtube, Spotify,
              Patreon, <ArrowLink to="https://en.wikipedia.org/wiki/RSS" target="_blank">RSS Feed</ArrowLink>, etc.
            </p>
            <Button
              onClick={() => setLinks(l => [...l, ''])}
              disabled={isLoading}
              variant='outline'
              className='mt-4 px-3 py-1'
            >
              + Add link
            </Button>
          </div>
          <div>
            <label>
              <div>Cover image</div>
              <input
                type="file"
                onChange={event => setCoverImage(event?.target.files?.item(0) ?? null)}
                accept="image/x-png,image/jpeg,application/pdf"
              />
            </label>
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className='rounded-md my-4 flex gap-4 items-start bg-red-100 text-red-600 p-4'>
          <AlertCircleIcon strokeWidth={1} />
          {errorMessage}
        </div>
      )}
      <div className='rounded-md text-sm flex flex-col md:flex-row gap-4 md:items-center'>
        <Button
          onClick={submitHandler}
          isLoading={isLoading}
          className='relative self-end flex-shrink-0'
        >
          {isEdit ? 'Suggest edits' : 'Submit podcast' }
        </Button>
        <p className='text-sm'>
          By submitting you agree to the <ArrowLink to="/contributions" target='_blank'>contributions terms</ArrowLink>
        </p>
      </div>
      <SuggestionSuccessModal hasShared={hasShared} isEdit={isEdit} />
    </>
  )
}

export default SharePodcast
