import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CircleCheckIcon } from 'lucide-react'
import { Button } from './button'
import { Link } from '@remix-run/react'

interface Props {
  hasShared: boolean
  isEdit: boolean
}

export const SuggestionSuccessModal = ({ hasShared, isEdit }: Props) => {
  return (
    <Dialog open={hasShared}>
      <DialogContent showCloseButton={false} className="max-w-2xl p-12 overflow-y-auto max-h-screen">
        <DialogHeader className='mb-4'>
          <DialogTitle className='text-xl mb-4 flex gap-2 items-center'>
            <CircleCheckIcon size={40} className='text-primary' />
            Thank for sharing!
          </DialogTitle>
          <DialogDescription className='text-base text-black'>
            Your {isEdit ? 'edition' : 'submission'} will soon be reviewed and might undergo some minor adjustments before being added to the directory. This process usually takes up to 48 hours.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex gap-2 justify-end'>
          <Link to="/">
            <Button onClick={() => console.log('Hey!')}>
              Back to the directory
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
