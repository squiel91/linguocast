import { useState, createContext, ReactNode, useContext, useEffect } from "react"
import { RegisterModal } from "./register-modal.auth"
import { LoginModal } from "./login-modal.auth"
import { deleteCookie, getCookie, setCookie } from "@/utils/cookies.utils"
import { LoaderFunctionArgs, json } from "@remix-run/node"
import axios from "axios"
import { useNavigate } from "@remix-run/react"

export interface MinimizedUser {
  id: number,
  name: string
}

interface Auth {
  user: MinimizedUser | null
  isLogged: boolean
  isLoginOpen: boolean
  isRegisterOpen: boolean
  hasLoggedOut: boolean
  loginHandler: (user: MinimizedUser, token?: string) => void
  logoutHandler: () => void 
  openLoginHandler: (isOpen: boolean) => void
  openRegisterHandler: (isOpen: boolean) => void
}

interface Props {
  children: ReactNode
}

export const AuthContext = createContext<Auth>({
  user: null,
  isLogged: false,
  isLoginOpen: false,
  isRegisterOpen: false,
  hasLoggedOut: false,
  loginHandler: () => console.info('loginHandler'),
  logoutHandler: () => console.info('Token set'),
  openLoginHandler: () => console.info('openLoginHandler'),
  openRegisterHandler: () => console.info('openRegisterHandler')
})

export const getUserProfileFromCookie = async (request: Request) => {
  let user: MinimizedUser | null
  try {
    const { data } = await axios.get<{ id: number, name: string }>(
      'http://localhost:3001/api/users/profile',
      { headers: { 'Cookie': request.headers.get('Cookie') || '' }})
    user = data
  } catch (error) {
    user = null
  }
  return user
}

export const AuthContextWrapper = ({ children }: Props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<MinimizedUser | null>(null)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [hasLoggedOut, setHasLoggedOut] = useState(false)

  return (
    <AuthContext.Provider value={{
      user,
      isLogged: !!user,
      isLoginOpen: isLoginOpen,
      isRegisterOpen: isRegisterOpen,
      hasLoggedOut,
      loginHandler: (user: MinimizedUser, token?: string) => {
        setUser(user)
        setHasLoggedOut(false)
        if (token) setCookie('token', token)
      },
      logoutHandler: () => {
        deleteCookie('token', false)
        setUser(null)
        setHasLoggedOut(true)
        navigate('/')
      },
      openLoginHandler: (isOpen) => setIsLoginOpen(isOpen),
      openRegisterHandler: (isOpen) => setIsRegisterOpen(isOpen),
    }}>
      {children}
      <RegisterModal isOpen={isRegisterOpen} />
      <LoginModal isOpen={isLoginOpen} />
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}