import React from 'react'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  id: string
  className?: string
}>

export function Tab(props: Props) {
  const {
    id,
    className,
    children,
  } = props

  return (
    <button
      id={'tab-' + id}
      className={className}
    >
      {children}
    </button>
  )
}

export type { Props as TabProps }
