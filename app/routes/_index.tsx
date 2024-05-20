import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useLocation } from '@remix-run/react'
import { json } from "@remix-run/node"

import { PODCASTS } from "../data/podcasts.data"
import { ChevronsUpDownIcon, GlobeIcon, PlusIcon, SearchIcon } from 'lucide-react'
import logo from '../assets/linguocast-logo.svg'
import { LEVELS } from '../constants/levels.constants'
import { Footer } from '@/themes/footer.themes'
import { Language, Level, Podcast } from '../types'
import { ArrowLink } from '@/components/arrow-link'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { LANGUAGES } from '@/constants/languages.constants'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/checkbox'
import { urlSafe } from '@/utils/url.utils'

export const loader = async () => {
  return json({ PODCASTS })
}

const ListPosts = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

  const { PODCASTS } = useLoaderData<typeof loader>()
  const [targetLanguage, setTargetLanguage] = useState<Language | null>(() => (searchParams.get('t') as Language || null))
  const [name, setName] = useState(() => (searchParams.get('q') ?? null))
  const [levels, setLevels] = useState<Level[]>(() => searchParams.getAll('l') as Level[])

  const [isPodcastSummaryOpen, setIsPodcastSummaryOpen] = useState(false)
  const [selectedPodcast, setSelectedPoscast] = useState<Podcast | null>(null)

  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false)
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

  const filtedPodcasts = (PODCASTS as unknown as Podcast[]).filter(p => (
    (!targetLanguage || p.targetLanguage === targetLanguage) &&  
    (levels.length === 0 || levels.some(l => p.levels.includes(l))) && 
    (!name || p.name.toLowerCase().includes(name.toLowerCase())) 
  ))

  const appliedHiddenFiltersCount = (name ? 1 : 0) + (levels.length > 0 ? 1 : 0) 

  return (
    <div>
      <div className='grid lg:grid-cols-4 gap:8 lg:gap-12 pl-6 md:pl-8 pr-6 md:pr-8 lg:pr-12 min-h-screen'>
        <div className='lg:border-r-[1px] lg:pr-8 border-slate-200 border-solid pb-10 lg:pb-16'>
          <div className='pt-8 lg:sticky lg:top-0 flex flex-col justify-between'>
            <img src={logo} alt="Linguocast logo" className='w-56 mb-4' />
            <div className='mb-8'>
              Explore the most complete language learning podcast directory. <ArrowLink to='/about'>Read more</ArrowLink>
            </div>
            <div className='flex flex-col gap-4'>
              <label>
                <div className='text-sm mb-1'>Language</div>
                <Select
                  value={targetLanguage}
                  options={[
                    { value: null, text: 'All', append: <GlobeIcon size={20} className='text-gray-400' /> },
                    ...LANGUAGES.map(({ code, name, flag }) => ({ value: code, text: name, append: flag }))
                  ]}
                  onChange={languageCode => setTargetLanguage(languageCode as Language | null)}
                />
              </label>
              <label className={cn(isFiltersExpanded ? 'block' : 'hidden', 'lg:block')}>
                <div className='text-sm mb-1'>Level</div>
                <div className='flex flex-col'>
                  {LEVELS.map(level => (
                    <label className='flex items-center gap-2 capitalize' key={level}>
                      <Checkbox
                        checked={levels.includes(level)}
                        onChange={checked => setLevels(levels => checked
                          ? [...levels, level]
                          : levels.filter(l => l !== level)
                        )}
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </label>
              <label className={cn(isFiltersExpanded ? 'block' : 'hidden', 'lg:block')}>
                <div className='text-sm mb-1'>Name</div>
                <Input
                  value={name}
                  prepend={<SearchIcon className='w-full h-full' />}
                  onChange={value => setName(value)}
                />
              </label>
              <button
                onClick={() => setIsFiltersExpanded(v => !v)}
                className="lg:hidden text-primary flex gap-2 items-center text-sm"
              >
                <ChevronsUpDownIcon size={16} />
                {isFiltersExpanded
                  ? 'Hide filters'
                  : `Show more filters ${
                    appliedHiddenFiltersCount > 0
                    ? `(${appliedHiddenFiltersCount} applied)`
                    : ''}`
                }
              </button>
            </div>
          </div>
        </div>
        <div className='lg:col-span-3 mb-16'>
          <div className='hidden lg:flex justify-between col-span-full my-8'>
            <div className='text-sm text-stone-400'>
              {filtedPodcasts.length === 0
                ? 'Oops! No podcast to show.'
                : `Showing ${filtedPodcasts.length} podcast${filtedPodcasts.length > 1 ? 's' : ''}`
              }
            </div>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-x-6  md:gap-x-8 lg:gap-x-12 gap-y-12 lg:col-span-3'>
            {filtedPodcasts.map(podcast => (
              <Link
                key={podcast.id}
                to={`/podcasts/${podcast?.id}/${urlSafe(podcast?.name)}`}
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
              </Link>
            ))}
            <Link to="/podcasts/suggest" className="self-start text-primary">
              <div className=" aspect-square flex items-center justify-center border-dashed border-2 border-primary rounded-lg flex-col">
                <PlusIcon strokeWidth={1} className="w-16 h-16" />
              </div>
              <h2 className='font-bold mt-2 uppercase'>Add missing show</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-slate-100'>
        <div className='container'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ListPosts
