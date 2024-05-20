import React, { ReactNode } from 'react'
import {
  Tooltip as ShadTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import { HelpCircleIcon } from 'lucide-react'

export const Tooltip = ({ children }: { children: ReactNode }) => (
  <TooltipProvider>
    <ShadTooltip delayDuration={0}>
      <TooltipTrigger><HelpCircleIcon size={16} strokeWidth={1} className='text-primary' /></TooltipTrigger>
      <TooltipContent className='max-w-sm p-4' sideOffset={8}>
        {children}
      </TooltipContent>
    </ShadTooltip>
  </TooltipProvider>
)
