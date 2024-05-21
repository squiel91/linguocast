import { ArrowLink } from '@/components/arrow-link'
import { Button } from '@/components/button'
import { PlatformIcon } from '@/components/platform-icon'
import { PODCASTS } from '@/data/podcasts.data'
import { getMainDomain, urlSafe } from '@/utils/url.utils'
import { Link, useParams } from '@remix-run/react'
import { ArrowUpRightIcon, PenLineIcon, PencilIcon } from 'lucide-react'
import React from 'react'


const ViewPodcast = () => {
  const { podcastId } = useParams()
  const podcast = PODCASTS.find(({ id }) => id === +podcastId!)
  if (!podcast) return

  const suggestEditElement = (
    <Link
      to={`/podcasts/${podcast?.id}/${urlSafe(podcast?.name)}/suggest`}
      className='flex gap-2 items-center text-primary'
    >
      Suggest an edit
      <PenLineIcon size={16} />
    </Link>
  ) 

  return (
    <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8">
  <div className='lg:col-span-2 self-start flex flex-col justify-between'>
    <div>
      <div className='text-3xl mb-4 font-bold'>{podcast.name}</div>
      <ul className='flex flex-wrap gap-2 items-start my-8'>
        {podcast.links?.map(link => (
          <li key={link}>
            <a href={link} target='_blank' title={link} className='flex bg-slate-200 font-bold px-3 py-2 rounded-full relative gap-1 items-center capitalize'>
              <PlatformIcon link={link} className='w-4 h-4 mr-1'/>
              {link.toLowerCase().includes('rss') ? 'RSS Feed' : getMainDomain(link)}
              <ArrowUpRightIcon strokeWidth={1} />
            </a>
          </li>
        ))}
      </ul>         
      <div>
        {podcast.description.split('\n').filter(text => text).map((text, index) => (
          <p key={index} className='mb-4'>{text}</p>
        ))}
      </div>
      <div className='hidden lg:block mt-8'>{suggestEditElement}</div>
    </div>
  </div>
  <div className="row-span-2">
    <img src={podcast.coverImage} className='w-full border-2 border-solid border-slate-300 rounded-xl mb-4' />
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
        {podcast.episodeCount && (
          <tr className='border-b-2 border-solid border-slate-100'>
            <th className='uppercase text-xs text-left pr-4 text-slate-500'># Episodes</th>
            <td>{podcast.episodeCount}</td>
          </tr>
        )}
        {(typeof podcast.hasVideo === 'boolean') && (
          <tr className='border-b-2 border-solid border-slate-100'>
            <th className='uppercase text-xs text-left pr-4 text-slate-500'>Has video</th>
            <td>{podcast.hasVideo ? 'Yes' : 'No'}</td>
          </tr>
        )}
        {(typeof podcast.isActive === 'boolean') && (
          <tr className='border-b-2 border-solid border-slate-100'>
            <th className='uppercase text-xs text-left pr-4 text-slate-500'>Is Active</th>
            <td>{podcast.isActive ? 'Yes' : 'No'}</td>
          </tr>
        )}
        {typeof podcast.transcript && (
          <tr className='border-b-2 border-solid border-slate-100'>
            <th className='uppercase text-xs text-left pr-4 text-slate-500'>Trasncript</th>
            <td>{podcast.isActive ? 'Yes' : 'No'}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  <div className='lg:hidden'>{suggestEditElement}</div>
</div>
  )
}

export default ViewPodcast
