import { ArrowLink } from '@/components/arrow-link'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { LanguageSelect } from '@/components/language-select'
import { PlatformIcon } from '@/components/platform-icon'
import { Select } from '@/components/select'
import { SharePodcastSuccess } from '@/components/share-podcast-success-modal'
import { Textarea } from '@/components/textarea'
import { Tooltip } from '@/components/tooltip'
import { LANGUAGES } from '@/constants/languages.constants'
import { LEVELS } from '@/constants/levels.constants'
import { Language } from '@/types'
import { Link } from '@remix-run/react'
import axios from 'axios'
import { AlertCircleIcon, Loader2Icon, MessageCircleWarningIcon, PlusIcon, TrashIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const SharePodcast = () => {
  const [name, setName] = useState<string | null>(null)
  const [targetLanguage, setTargetLanguage] = useState<Language | null>(null)
  const [mediumLanguage, setMediumtLanguage] = useState<Language | null>(null)
  const [description, setDescription] = useState<string | null>(null)
  const [levels, setLevels] = useState<string[]>([])
  const [links, setLinks] = useState<string[]>([''])

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
      formData.append('Name', name)
      formData.append('Target language', targetLanguage)
      if (mediumLanguage) formData.append('Medium language', mediumLanguage)
      formData.append('Description', description)
      levels.forEach(level => formData.append('Levels', level))
      links.filter(l => !!l).forEach(link => formData.append('Links', link))

      // await axios.post('https://formspree.io/f/xdoqjdqn', formData)
      setHasShared(true)
    } catch (error) {
      setErrorMessage('Ooops! There was an unexpected error. Please try again or contact us.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      <h1 className='text-3xl font-bold mb-8'>Share a podcast</h1>
      <p className='mb-8'>
        This is a directory created and mantained by the learning comunity! We encourage you to add as many language learning podcast you know and enjoy.
        Remember that only podcast mainly targeted to language learners will be accepted.
      </p>
      <div className="grid md:grid-cols-3 gap-x-16 gap-y-6 mb-8">
        <div className='grid md:col-span-2 gap-6 content-start'>
          <label className='md:col-span-2'>
            <div className='text-sm  mb-2'>Podcast name</div>
            <Input value={name ?? ''} onChange={name => setName(name)} disabled={isLoading} />
          </label>
          <label>
            <div className='text-sm mb-2 flex gap-1'>
              Target language
              <Tooltip>
                <p>The primary language that is teaching.</p>
              </Tooltip>
            </div>
            <Select
              value={targetLanguage}
              options={[
                { value: null, text: '', selectable: false },
                ...LANGUAGES.map(({ code, name, flag }) => ({ value: code, text: name, append: flag }))
              ]}
              onChange={languageCode => setTargetLanguage(languageCode as Language)}
              disabled={isLoading}
            />
          </label>
          <label>
          <div className='text-sm mb-2 flex items-center gap-1'>
            Medium language
            <Tooltip>
              <p className='mb-2'>The language used to explain and translate the target language.</p>
              <p>For example, using English to translate difficul<br /> words when teaching Italian. English would be the medium language.</p>
            </Tooltip>
          </div>
            <Select
              value={mediumLanguage}
              options={[
                ...LANGUAGES.map(({ code, name, flag }) => ({
                  value: code,
                  text: code === targetLanguage ? `${name} (immersive)` : name,
                  append: flag
                }))
              ]}
              onChange={languageCode => setMediumtLanguage(languageCode as Language)}
              disabled={isLoading}
            />
          </label>
          <div className='md:col-span-2'>
            <div className='text-sm mb-1'>Level</div>
            <div className='flex gap-4 flex-wrap text-sm '>
              {LEVELS.map(level => (
                <label key={level} className='flex items-center gap-2 capitalize'>
                  <input
                    type="checkbox"
                    checked={levels.includes(level)}
                    onChange={event => setLevels(levels => event.target.checked
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
          <label className='md:col-span-2'>
            <div className='text-sm  mb-1 items-center flex gap-1'>
              Description
              <Tooltip>
                <p className='mb-2'>Write it as a review with the most important information.</p>
                <p>For example, using English to translate difficul<br /> words when teaching Italian. English would be the medium language.</p>
              </Tooltip>
            </div>
            <Textarea
              value={description ?? ''}
              onChange={value => setDescription(value)}
              disabled={isLoading}
            />
            <div className='mt-1 text-sm italic text-gray-400'>
              {!description || description?.length < MIN_DESCRIPTION_CHARS
                ? 'At least 50 characters are required'
                : description?.length < MAX_DESCRIPTION_CHARS
                  ? `${MAX_DESCRIPTION_CHARS - description.length} characters left`
                  : `You have ${description.length - MAX_DESCRIPTION_CHARS} over the limit`
              }.
              
            </div>
          </label>
        </div>
        <div>
          <div className='text-sm mb-4 mt-2'>
            <p className='mb-2 '> 
              Add links where to listen and support the show: Apple, Youtube,
              Patreon, <span className='inline-flex items-center gap-1'>RSS Feed <Tooltip>A RSS Feed is a link where all the podcast episodes</Tooltip></span>, etc.
            </p>
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
          <Button
            onClick={() => setLinks(l => [...l, ''])}
            disabled={isLoading}
            variant='outline'
            className='mt-4 px-3 py-1'
          >
            <div className='flex gap-1 items-center'>
              <PlusIcon size={16} />
              Add link
            </div>
          </Button>
        </div>
      </div>
      {errorMessage && (
        <div className='rounded-md my-4 flex gap-4 items-start bg-red-100 text-red-600 p-4'>
          <AlertCircleIcon strokeWidth={1} />
          {errorMessage}
        </div>
      )}
      <div className='rounded-md text-sm flex gap-4 items-center'>
        <Button
          onClick={submitHandler}
          isLoading={isLoading}
          className='relative self-end flex-shrink-0'
        >
          Submit podcast
        </Button>
        <p className='text-sm'>
          By submitting you agree to the <ArrowLink to="/contributions" target='_blank'>contributions terms</ArrowLink>
        </p>
      </div>
      <SharePodcastSuccess hasShared={hasShared} />
    </>
  )
}

export default SharePodcast
