import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useLocation } from '@remix-run/react'
import { json } from "@remix-run/node"

import { podcasts } from "../data/podcasts.data"
import { GlobeIcon, PlusIcon, SearchIcon } from 'lucide-react'
import logo from '../assets/linguocast-logo.svg'
import { LEVELS } from '../constants/levels.constants'
import { Footer } from '@/themes/footer.themes'
import { Language, Level, Podcast } from '../types'
import { ArrowLink } from '@/components/arrow-link'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { LANGUAGES } from '@/constants/languages.constants'
import { PodcastSummaryModal } from '@/components/podcast-summary-modal'

export const loader = async () => {
  return json({ podcasts })
}

const ListPosts = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

  const { podcasts } = useLoaderData<typeof loader>()
  const [targetLanguage, setTargetLanguage] = useState<Language | null>(() => (searchParams.get('t') as Language || null))
  const [name, setName] = useState(() => (searchParams.get('q') ?? null))
  const [levels, setLevels] = useState<Level[]>(() => searchParams.getAll('l') as Level[])

  const [isPodcastSummaryOpen, setIsPodcastSummaryOpen] = useState(false)
  const [selectedPodcast, setSelectedPoscast] = useState<Podcast | null>(null)
  useEffect(() => {
    console.log('Here!', targetLanguage)
    const searchParams = new URLSearchParams()

    if (targetLanguage === null) searchParams.delete('t')
    else searchParams.set('t', targetLanguage)

    if (name === null) searchParams.delete('q')
    else searchParams.set('q', name)

    searchParams.delete('l')
    levels.forEach(level => searchParams.append('l', level))

    const newSearch = searchParams.toString();
    window.history.replaceState(
      {},
      '',
      location.pathname + (newSearch ? `?${searchParams}` : '')
    )
  }, [targetLanguage, name, levels])

  const filtedPodcasts = (podcasts as unknown as Podcast[]).filter(p => (
    (!targetLanguage || p.targetLanguage === targetLanguage) &&  
    (levels.length === 0 || levels.some(l => p.levels.includes(l))) && 
    (!name || p.name.toLowerCase().includes(name.toLowerCase())) 
  ))

  return (
    <div>
      <div className='grid lg:grid-cols-4 gap:8 lg:gap-12 pl-6 md:pl-8 pr-6 md:pr-8 lg:pr-12 min-h-screen'>
        <div className='border-b-[1px] lg:border-b-0 lg:border-r-[1px] lg:pr-8 border-slate-200 border-solid pb-8 lg:pb-16'>
          <div className='pt-8 lg:sticky lg:top-0 flex flex-col justify-between'>
            <img src={logo} alt="Linguocast logo" className='w-56 mb-4' />
            <div className='mb-8'>
              The podcast directory for language learners. <ArrowLink to='/about'>Learn more</ArrowLink>
            </div>
            <div className='flex flex-col gap-4'>
              <label>
                <div className='text-slate-500 text-sm mb-1'>Language</div>
                <Select
                  value={targetLanguage}
                  options={[
                    { value: null, text: 'All', append: <GlobeIcon size={20} className='text-gray-400' /> },
                    ...LANGUAGES.map(({ code, name, flag }) => ({ value: code, text: name, append: flag }))
                  ]}
                  onChange={languageCode => setTargetLanguage(languageCode as Language | null)}
                />
              </label>
              <label>
                <div className='text-slate-500 text-sm mb-1'>Level</div>
                <div className='flex flex-col'>
                  {LEVELS.map(level => (
                    <label className='flex items-center gap-2 capitalize' key={level}>
                      <input
                        type="checkbox"
                        className='border-slate-300'
                        checked={levels.includes(level)}
                        onChange={event => setLevels(levels => event.target.checked
                          ? [...levels, level]
                          : levels.filter(l => l !== level)
                        )}
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </label>
              <label>
                <div className='text-slate-500 text-sm mb-1'>Name</div>
                <Input
                  value={name}
                  prepend={<SearchIcon className='w-full h-full' />}
                  placeholder='Search by name'
                  onChange={value => setName(value)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className='lg:col-span-3 mb-16'>
          <div className='flex justify-between col-span-full my-8'>
            <div className='text-sm text-stone-400'>
              {filtedPodcasts.length === 0
                ? 'Oops! No podcast to show.'
                : `Showing ${filtedPodcasts.length} podcast${filtedPodcasts.length > 1 ? 's' : ''}`
              }
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 lg:col-span-3'>
            {filtedPodcasts.map(podcast => (
              <button
                key={podcast.id}
                onClick={() => {
                  setSelectedPoscast(podcast)
                  setIsPodcastSummaryOpen(true)
                }}
                className='text-left w-full self-start'
              >
                <article>
                  <img src={podcast.coverImage} className='w-full border-solid border-2 border-slate-200 rounded-lg' />
                  <h2 className='text-lg font-bold mt-2'>{podcast.name}</h2>
                  <p className='text-slate-500 text-sm mt-1'>{podcast.summary}</p>
                  <div className='flex gap-2 flex-wrap text-sm mt-2'>
                    {[podcast.targetLanguage, ...podcast.levels].map(tag => (
                      <div key={tag} className='bg-slate-200 text-slate-700 inline-block px-2 rounded-full capitalize'>{tag}</div>
                    ))}
                  </div>
                </article>
              </button>
            ))}
            <Link to="/share-podcast" className="self-start text-primary">
              <div className=" aspect-square flex items-center justify-center border-dashed border-2 border-primary rounded-lg flex-col">
                <PlusIcon strokeWidth={1} className="w-16 h-16" />
              </div>
              <h2 className='font-bold mt-2 uppercase'>Share missing show</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-slate-100'>
        <div className='container'>
          <Footer />
        </div>
      </div>
      <PodcastSummaryModal
        podcast={selectedPodcast}
        open={isPodcastSummaryOpen}
        onClose={() => { setIsPodcastSummaryOpen(false); setTimeout(() => setSelectedPoscast(null), 300) }}
      />
    </div>
  )
}

export default ListPosts
