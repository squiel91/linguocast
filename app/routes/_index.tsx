import React from 'react'
import logo from '@/assets/linguocast-logo.svg'

const Index = () => (
  <div className='flex items-center justify-center flex-col gap-4 h-screen'>
    <img src={logo} className='w-1/3' />
    The podcast directory for language learners.
    <div className='uppercase bg-slate-200 px-4 py-1 rounded-full text-slate-400 text-sm'>
      In the works
    </div>
  </div>
)

export default Index
