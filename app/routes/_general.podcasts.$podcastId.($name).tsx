import { ArrowLink } from '@/components/arrow-link'
import { PlatformIcon } from '@/components/platform-icon'
import { PODCASTS } from '@/data/podcasts.data'
import { getMainDomain, urlSafe } from '@/utils/url.utils'
import { useParams } from '@remix-run/react'
import { ArrowUpRightIcon } from 'lucide-react'
import React from 'react'


const ViewPodcast = () => {
  const { podcastId } = useParams()
  const podcast = PODCASTS.find(({ id }) => id === +podcastId!)
  if (!podcast) return
  return (
    <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8">
      <div className='lg:col-span-2'>
        <div className='text-3xl mb-4 font-bold'>{podcast.name}</div>
        <ul className='flex flex-wrap gap-2 items-start mt-4 mb-8'>
          {podcast.links?.map(link => (
            <li>
              <a href={link} target='_blank' title={link} className='flex bg-slate-200 px-3 py-2 rounded-full relative gap-2 items-center capitalize'>
                <PlatformIcon link={link} className='w-4 h-4'/>
                {link.toLowerCase().includes('rss') ? 'RSS Feed' : getMainDomain(link)}
                <ArrowUpRightIcon strokeWidth={1} />
              </a>
            </li>
          ))}
        </ul>         
        <div>{podcast.description.split('\n').filter(text => text).map(text => (
          <p className='mb-4'>{text}</p>
        ))}</div>
        <ul className='flex gap-4 mt-8'>
          <ArrowLink to={`/podcasts/${podcast?.id}/${urlSafe(podcast?.name)}/suggest`}>Suggest and edit</ArrowLink>
        </ul>
      </div>  
      <div>
        <img src={podcast.coverImage}  className='w-full border-2 border-solid border-slate-300 rounded-xl mb-4' />
        <table className='mb-4 text-sm w-full'>
          <tbody>
            <tr className='border-b-2 border-solid border-slate-100'>
              <th className='uppercase text-xs text-left pr-4 text-slate-500'>Language</th>
              <td className='capitalize'>{podcast.targetLanguage}</td>
            </tr>
            <tr className='border-b-2 border-solid border-slate-100'>
              <th className='uppercase text-xs text-left pr-4 text-slate-500'>Explanations</th>
              <td className='capitalize'>{podcast.mediumLanguage}</td>
            </tr>
            <tr className='border-b-2 border-solid border-slate-100'>
              <th className='uppercase text-xs text-left pr-4 text-slate-500'>Levels</th>
              <td className='capitalize'>{podcast.levels.join(', ')}</td>
            </tr>
            {podcast.since && (
              <tr className='border-b-2 border-solid border-slate-100'>
                <th className='uppercase text-xs text-left pr-4 text-slate-500'>First aired</th>
                <td>{new Date(podcast.since).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
              </tr>
            )}
            {podcast.numberOfEpisodes && (
              <tr className='border-b-2 border-solid border-slate-100'>
                <th className='uppercase text-xs text-left pr-4 text-slate-500'># Episodes</th>
                <td>{podcast.numberOfEpisodes}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewPodcast
