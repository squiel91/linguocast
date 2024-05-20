import React, { ReactNode } from 'react'
import { Link } from '@remix-run/react'
import { ArrowUpRightIcon } from 'lucide-react'

interface Props {
  to: string
  target?: string
  children: ReactNode
}

export const ArrowLink = ({ to, target, children }: Props) => (
  <Link to={to} target={target} className="text-primary inline-flex items-center gap-1">
    {children} <ArrowUpRightIcon strokeWidth={1} className="w-5 h-5" />
  </Link>
)
