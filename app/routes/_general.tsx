import { Footer } from '@/themes/footer.themes'
import { Link, Outlet } from '@remix-run/react'
import React, { useEffect } from 'react'
import logo from '@/assets/linguocast-logo.svg'
import { ArrowLeftIcon, LayoutGridIcon } from 'lucide-react'


const GeneralLayout = () => (
  <>
    <nav className="container flex justify-between flex-wrap pt-8 pb-12 gap-4">
      <Link to="/"><img src={logo} className='w-56' /></Link>
      <Link
        to="/"
        className='self-start bg-slate-100 px-4 py-2 rounded-full text-primary text-sm flex gap-2 items-center'>
          <ArrowLeftIcon /> <span className="hidden md:block">Back to directory</span><LayoutGridIcon className="md:hidden" />
        </Link>
    </nav>
    <main className='container'>
      <Outlet />
    </main>
    <div className='bg-slate-100 mt-24'>
      <div className='container'>
        <Footer />
      </div>
    </div>
  </>
)

export default GeneralLayout
