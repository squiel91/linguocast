import { ArrowLink } from "@/components/arrow-link";
import { Card } from "../components/ui/card";
import { PodcastIcon } from "lucide-react";
import githubIcon from '../assets/platforms/github.svg'
import discordIcon from '../assets/platforms/discord.svg'
import { Link } from "@remix-run/react";

export const Footer = () => (

  <footer className="bg-slate-100 text-gray-500 pt-12 grid md:grid-cols-2 gap-12 text-sm">
    <div>
      <p className='mb-4'>
        Your go-to open-source language learning podcast directory. We're community-maintained and
        committed to offering the most comprehensive and up to date collection of shows.
      </p>
      <p>
        Got questions, ideas, or just want to say 'hey'? Drop us a line at <Link to='mailto:hey@linguocast.com' className='text-primary'>hey@linguocast.com</Link>!
      </p>
      <ul className='mt-8 flex flex-col gap-1'>
        <li>Get to know <ArrowLink to="about">this project</ArrowLink></li>
        <li>Have a sneak peek of the <ArrowLink to="https://docs.google.com/spreadsheets/d/1BYnQQWPUC16IfRmMpgWziL6rMOwVcxzWhaXBHa1rKtY" target='_blank'>coming features</ArrowLink></li>
        <li>Check the <ArrowLink to="/contributions">contribution terms</ArrowLink></li>
      </ul>
    </div>
    <div>
      <div className='mb-4 font-bold text-sm'>How can I contribute?</div>
      <ul className='flex flex-col gap-3'>
        <li>
          <Link to="/share-podcast" className='w-full text-left'>
            <Card className='flex gap-5 items-center p-4 bg-slate-100 text-slate-600'>
              <PodcastIcon className='w-12 h-12 text-slate-500' />
              <div>
                <div >Share language learning podcasts</div>
                <p className='text-xs'>Add that missing podcasts others are eager to discover.</p>
              </div>
            </Card>
          </Link>          
        </li>
        <li>
          <a href="https://discord.gg/dBNT2BBk" target='_blank'>
            <Card className='flex gap-5 items-center p-4 bg-slate-100'>
              <img src={discordIcon} alt="Discod" className='w-12' />                  
              <div>
                <div>Join the Discord group</div>
                <p className='text-xs'>Discuss the future of the platform or bocome a moderator.</p>
              </div>
            </Card>
          </a>
        </li>
        <li>
          <a href="https://github.com/squiel91/linguocast" target='_blank'>
            <Card className='flex gap-5 items-center p-4 bg-slate-100'>
              <img src={githubIcon} alt="Github" className='w-12' />
              <div>
                <div>Help develop the next feature</div>
                <p className='text-xs'>Help accelerate the development of coming features.</p>
              </div>
            </Card>
          </a>
        </li>
      </ul>
    </div>
    <div className='md:col-span-2 border-t-[1px] border-solid border-slate-300 pt-4 mb-8 mt-4 text-sm'>
      Licensed under Attribution-NonCommercial-ShareAlike / CC BY-NC-SA
    </div>
  </footer>
)
