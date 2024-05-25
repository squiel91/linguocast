import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import React, { ReactNode } from 'react'

interface Props {
  value: string | null
  type?: 'text' | 'number' | 'password'
  onChange: (value: string | null) => void
  placeholder?: string
  disabled?: boolean
  prepend?: ReactNode
  append?: ReactNode
  className?: string
}

export const Input = ({
  value,
  type = 'text',
  onChange: changeHandler,
  placeholder,
  disabled = false,
  prepend,
  append,
  className
}: Props) => (
  <div className={cn('relative', className)}>
    {prepend && (
      <div className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500 appearance-none bg-transparent'>
        {prepend}
      </div>
    )}
    <input
      className={cn(
        'p-4 py-2 w-full border-[1px] border-solid border-slate-200 rounded-md',
        prepend ? 'pl-9' : '',
        append ? 'pr-9' : ''
      )}
      type={type}
      value={value ?? ''}
      placeholder={placeholder}
      onChange={event => changeHandler(event.target.value || null)}
      disabled={disabled}
    />
    {append && (
      <div className='absolute right-3 top-1/2 -translate-y-1/2'>
        {append}
      </div>
    )}
  </div>
)
