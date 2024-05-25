import { Footer } from '@/themes/footer.themes'
import { Link, Outlet, json, useLoaderData } from '@remix-run/react'
import React from 'react'
import logo from '@/assets/linguocast-logo.svg'
import { UserPlusIcon } from 'lucide-react'
import { Button } from '@/components/button'
import { getUserProfileFromCookie, useAuth } from '@/auth/context.auth'
import { LoaderFunctionArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUserProfileFromCookie(request) })
}

const GeneralLayout = () => {
  const { user: authUser, openRegisterHandler, openLoginHandler, loginHandler, logoutHandler, hasLoggedOut } = useAuth()

  const { user: remoteUser } = useLoaderData<typeof loader>()
  
  const user = hasLoggedOut ? null : remoteUser || authUser
  if (!hasLoggedOut && remoteUser) loginHandler(remoteUser)

  return (
    <>
      <nav className="container flex justify-between flex-wrap pt-8 pb-12 gap-4">
        <Link to="/"><img src={logo} className='w-56' /></Link>
        {user!!
          ? <div>Hey {user.name}! <Button variant='discrete' onClick={logoutHandler}>Logout</Button></div>
          : (
            <div className='flex gap-2'>
              <Button onClick={() => openLoginHandler(true)} variant='discrete'>
                Login
              </Button>
              <Button onClick={() => openRegisterHandler(true)}>
                <div className='flex gap-2 items-center px-2'>
                  <UserPlusIcon size={18} />Join</div>
                </Button>
            </div>
          )
        }
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
