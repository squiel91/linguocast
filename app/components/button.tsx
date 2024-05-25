import { cn } from '@/lib/utils'
import { Loader2Icon } from 'lucide-react'
import React, { ReactNode } from 'react'

interface Props {
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'outline' | 'discrete',
  compact?: boolean
  noFullWidthInMobile?: boolean
  children: ReactNode
}
export const Button = ({
  onClick: clickHandler,
  disabled,
  className,
  isLoading = false,
  variant = 'primary',
  compact = false,
  noFullWidthInMobile = false,
  children
}: Props) => (
  <button
    onClick={clickHandler}
    disabled={disabled}
    className={cn(
      variant === 'primary'
        ? 'bg-primary text-white'
        : variant === 'outline'
          ?'text-primary border-primary border-[1px] border-solid'
          : 'text-primary',
      compact ? 'px-6 py-3' : 'px-3 py-2',
      noFullWidthInMobile ? 'w-auto' : 'w-full md:w-auto',
      'rounded-md',
      className
    )}
  >
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      {isLoading && <Loader2Icon className='animate-spin'/>}
    </div>
    <span className={isLoading ? 'opacity-0' : ''}>{children}</span>
  </button>
)

