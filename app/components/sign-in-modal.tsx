import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { AtSignIcon, BombIcon, Loader2Icon, MessageCircleWarningIcon, WandSparklesIcon } from "lucide-react"
import { isValidEmail } from "@/utils/validations.utils"
import { Button } from "./button"
import { Input } from "./input"
import { createUser } from "@/db/repositories/users.respositories.db"
import { json } from "@remix-run/react"
import { ActionFunctionArgs } from "@remix-run/node"
import axios from "axios"

interface Props {
  isOpen: boolean
  onDismiss: () => void
}

export const SignInModal = ({ isOpen, onDismiss }: Props) => {
  const [email, setEmail] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  
  useEffect(() => {
    setEmail('')
    setIsSending(false)
    setErrorMessage(null)
  }, [isOpen])

  const accessHandler = async () => {
    setErrorMessage(null)
    if (!isValidEmail(email ?? '')) return setErrorMessage('That email doesn\'t seem to be valid.')
    setIsSending(true)
    try {
      const response = await axios.post('/', { name: 'Ezequiel', email });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onDismiss() }>
      <DialogContent className="sm:max-w-[725px] p-8 overflow-y-auto max-h-screen">
        <DialogHeader>
          <DialogTitle className="font-normal text-2xl text-left">Welcome back to Linguocast!</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 pt-4">
          <p>You'll recieve a magic login link into your inbox, no password required.</p>
          <div className="flex w-full gap-4">
            <Input
              value={email}
              onChange={(email) => setEmail(email)}
              // onEnter={accessHandler}
              placeholder="My email..."
              disabled={isSending}
              className="flex-grow"
              prepend={<AtSignIcon width={16} />}
            />
            <Button
              // onClick={accessHandler}
              className="flex-shrink-0"
              disabled={isSending}
            >
              <div className="flex gap-3">
                {isSending && <Loader2Icon className="animate-spin" width={20} />}
                {!isSending && <WandSparklesIcon width={16} />}
                Send magic link
              </div>
            </Button>
          </div>
          {errorMessage && (
            <div className="p-4 flex gap-4 text-sm rounded-lg text-white bg-red-600">
              <BombIcon size={24} className="shrink-0" />
              {errorMessage}
            </div>
          )}
          <div className="flex gap-4 text-sm p-4 rounded-lg bg-slate-100">
            <MessageCircleWarningIcon size={24} className="shrink-0" />
            <div>
              Magic login links expires 30 minutes after sent and can only be used once. Older links in your inbox won't make the trick.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
