import { Button } from "@/components/button"
import { Input } from "@/components/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { isValidEmail } from "@/utils/validations.utils"
import axios from "axios"
import { useState } from "react"
import { MinimizedUser, useAuth } from "./context.auth"
import { EyeIcon, EyeOffIcon, MoveRightIcon } from "lucide-react"

export const LoginModal = ({ isOpen }: { isOpen: boolean }) => {
  const { openLoginHandler, openRegisterHandler, loginHandler: loginAuthHandler } = useAuth()
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const loginHandler = async () => {
    if (!isValidEmail(email ?? '')) return alert('The emails is not valid')
    if ((password?.length ?? 0) < 6) return alert('The password must be at lest 6 characters long')

    try {
      setIsLoading(true)
      const { data: { token, user } } = await axios.post<{ token: string, user: MinimizedUser }>(
        'http://localhost:3001/api/users/authenticate',
        { email, password }
      )
      loginAuthHandler(user, token)
      openLoginHandler(false)
    } catch (error) {
      console.error(error)
      alert('There was an unexpected error!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => openLoginHandler(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome back!</DialogTitle>
          <DialogDescription>
            Join to start commenting, rating and adding and editing podcasts.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 flex-col">
          <label>
            <div>Email</div>
            <Input value={email ?? ''} onChange={(value) => setEmail(value)} disabled={isLoading} />
          </label>
          <label>
            <div>Password</div>
            <Input
              type={passwordVisible ? 'text' : 'password'}
              append={(
                <button
                  onClick={() => setPasswordVisible(v => !v)}
                  className="text-primary w-4 h-4"
                >
                  {passwordVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              )}
              value={password ?? ''}
              onChange={(value) => setPassword(value)} disabled={isLoading}
            />
          </label>
        </div>
        <DialogFooter className="sm:justify-start">
          <div className="flex flex-col gap-4 mt-4 w-full">
            <Button onClick={loginHandler} isLoading={isLoading}>
              Login
            </Button>
            <div className="text-sm">
              Not registered yet? <button className="text-primary inline-flex items-center gap-2" onClick={() => {
                openLoginHandler(false)
                setTimeout(() => openRegisterHandler(true), 100)
              }}>Switch to register <MoveRightIcon size={16} /></button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}