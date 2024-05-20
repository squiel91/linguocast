import React, { ReactNode } from 'react'
import { Link } from '@remix-run/react'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'

interface Props {
  to: string
  target?: string
  children: ReactNode
}

export const ArrowLink = ({ to, target, children }: Props) => (
  <Link to={to} target={target} className="text-primary">
    {children} <ArrowUpRightIcon className="inline w-4" />
  </Link>
)
