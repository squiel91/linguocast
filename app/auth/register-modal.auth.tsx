import { Button } from "@/components/button"
import { Input } from "@/components/input"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { isValidEmail } from "@/utils/validations.utils"
import axios from "axios"
import { useState } from "react"
import { MinimizedUser, useAuth } from "./context.auth"

export const RegisterModal = ({ isOpen }: { isOpen: boolean }) => {
  const { openRegisterHandler, openLoginHandler, loginHandler: loginAuthHandler } = useAuth()

  const [email, setEmail] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const registerHandler = async () => {
    if (!isValidEmail(email ?? '')) return alert('The emails is not valid')
    if (!name) return alert('The name is required')
    if ((password?.length ?? 0) < 6) return alert('The password must be at lest 6 characters long')

    try {
      setIsLoading(true)
      const { data: { token, user } } = await axios.post<{ token: string, user: MinimizedUser }>('http://localhost:3001/api/users', {
        email, name, password
      })
      loginAuthHandler(user, token)
      openRegisterHandler(false)
    } catch (error) {
      console.error(error)
      alert('There was an unexpected error!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => openRegisterHandler(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the community</DialogTitle>
          <DialogDescription>
            Join to start commenting, rating and adding and editing podcasts.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <label>
            <div>Email</div>
            <Input value={email ?? ''} onChange={(value) => setEmail(value)} disabled={isLoading} />
          </label>
          <label>
            <div>Name</div>
            <Input value={name ?? ''} onChange={(value) => setName(value)} disabled={isLoading} />
          </label>
          <label>
            <div>Password</div>
            <Input type="password" value={password ?? ''} onChange={(value) => setPassword(value)} disabled={isLoading} />
          </label>
        </div>
        <DialogFooter className="flex gap-2 justify-end mt-4">
          <DialogClose asChild>
            <Button variant="discrete" onClick={() => openRegisterHandler(false)}>
              Close
            </Button>
          </DialogClose>
          <Button variant="outline" onClick={() => {
            openRegisterHandler(false)
            setTimeout(() => openLoginHandler(true), 100)
          }}>
            Switch to login
          </Button>
          <Button onClick={registerHandler} isLoading={isLoading}>
            Join
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}