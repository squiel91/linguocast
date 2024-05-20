import { cn } from '@/lib/utils'
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  value: string | null
  onChange: (value: string | null) => void
  placeholder?: string
  disabled?: boolean
  minRows?: number
  className?: string
}

export const Textarea = ({
  value,
  onChange: changeHandler,
  placeholder,
  disabled = false,
  minRows = 4,
  className
}: Props) => (
  <TextareaAutosize
    className={cn(
      'p-4 w-full border-[1px] border-solid border-slate-200 rounded-md',
      className
    )}
    value={value ?? ''}
    placeholder={placeholder}
    minRows={minRows}
    disabled={disabled}
    onChange={event => changeHandler(event.target.value || null)}
  />
)
