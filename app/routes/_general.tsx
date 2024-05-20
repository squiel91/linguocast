import { Footer } from '@/themes/footer.themes'
import { Link, Outlet } from '@remix-run/react'
import React, { useEffect } from 'react'
import logo from '@/assets/linguocast-logo.svg'
import { ArrowLeftIcon } from 'lucide-react'


const GeneralLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <nav className="container flex justify-between flex-wrap pt-8 pb-12 gap-4">
        <Link to="/"><img src={logo} width='300' /></Link>
        <Link
          to="/"
          className='self-start bg-slate-100 px-4 py-2 rounded-full text-primary text-sm flex gap-2 items-center'>
            <ArrowLeftIcon /> Back to listing
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
}

export default GeneralLayout
