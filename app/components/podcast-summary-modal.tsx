import React from 'react'
import { Podcast } from "../types"
import {
  Dialog,
  DialogContent,
} from "./ui/dialog"
import { PlatformIcon } from './platform-icon'
import { getMainDomain } from '@/utils/url.utils'
import { ArrowUpRightIcon } from 'lucide-react'

interface Props {
  open: boolean
  podcast: Podcast | null
  onClose: () => void
}

export const PodcastSummaryModal = ({ open, podcast, onClose: closeHandler }: Props) => (
  <Dialog open={open} onOpenChange={(open) => !open && closeHandler()}>
    <DialogContent className="max-w-5xl p-12 overflow-y-auto max-h-screen">
      <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8">
        <div>
          <img src={podcast?.coverImage}  className='w-full border-2 border-solid border-slate-300 rounded-xl mb-4' />
          <table className='mb-4 text-sm'>
            <tbody>
              <tr className='border-b-2 border-solid border-slate-100'>
                <th className='uppercase text-xs text-left pr-4 text-slate-500'>Language</th>
                <td className='capitalize'>{podcast?.targetLanguage}</td>
              </tr>
              <tr className='border-b-2 border-solid border-slate-100'>
                <th className='uppercase text-xs text-left pr-4 text-slate-500'>Explanations</th>
                <td className='capitalize'>{podcast?.mediumLanguage}</td>
              </tr>
              <tr className='border-b-2 border-solid border-slate-100'>
                <th className='uppercase text-xs text-left pr-4 text-slate-500'>Levels</th>
                <td>{podcast?.levels.join(', ')}</td>
              </tr>
              {podcast?.since && (
                <tr className='border-b-2 border-solid border-slate-100'>
                  <th className='uppercase text-xs text-left pr-4 text-slate-500'>First aired</th>
                  <td>{new Date(podcast.since).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                </tr>
              )}
              {podcast?.numberOfEpisodes && (
                <tr className='border-b-2 border-solid border-slate-100'>
                  <th className='uppercase text-xs text-left pr-4 text-slate-500'># Episodes</th>
                  <td>{podcast.numberOfEpisodes}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='lg:col-span-2'>
          <div className='text-3xl mb-4 font-bold'>{podcast?.name}</div>
          
          <div>{podcast?.description.split('\n').filter(text => text).map(text => (
            <p className='mb-4'>{text}</p>
          ))}</div>

          <ul className='flex flex-wrap gap-2 items-start mt-8'>
            {podcast?.links?.map(link => (
              <li>
                <a href={link} target='_blank' title={link} className='flex bg-slate-200 px-3 py-2 rounded-full relative gap-2 items-center capitalize'>
                  <PlatformIcon link={link} className='w-4 h-4'/>
                  {link.toLowerCase().includes('rss') ? 'RSS Feed' : getMainDomain(link)}
                  <ArrowUpRightIcon strokeWidth={1} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </DialogContent>
  </Dialog>
)