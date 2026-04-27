import type { ReactNode } from 'react'

const CAL_LINK = 'zyflux/30min'
const NAMESPACE = '30min'

interface CalButtonProps {
  className?: string
  children: ReactNode
}

export default function CalButton({ className, children }: CalButtonProps) {
  return (
    <button
      type="button"
      className={className}
      data-cal-link={CAL_LINK}
      data-cal-namespace={NAMESPACE}
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </button>
  )
}
