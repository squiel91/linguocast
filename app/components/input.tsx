import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import React, { ReactNode } from 'react'

interface Props {
  value: string | null
  onChange: (value: string | null) => void
  placeholder?: string
  disabled?: boolean
  prepend?: ReactNode
  className?: string
}

export const Input = ({
  value,
  onChange: changeHandler,
  placeholder,
  disabled = false,
  prepend,
  className
}: Props) => (
  <div className={cn('relative', className)}>
    {prepend && (
      <div className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500'>
        {prepend}
      </div>
    )}
    <input
      className={cn('p-4 py-2 w-full border-[1px] border-solid border-slate-200 rounded-md', prepend ? 'pl-9' : '')}
      type="text"
      value={value ?? ''}
      placeholder={placeholder}
      onChange={event => changeHandler(event.target.value || null)}
      disabled={disabled}
    />
  </div>
)
