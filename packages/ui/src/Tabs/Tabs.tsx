import React from 'react'
import type { PropsWithChildren, ReactNode } from 'react'
import type { TabsData } from './types'
import { Tab } from './Tab'

type Props<T, P> = PropsWithChildren<{
  data: TabsData<T, P>
  renderTab: (data: T) => ReactNode
  renderPanel: (data: P) => ReactNode
  activeTabId: string
  onSelect: (id: string) => void
  tabListClassName?: string
  tabListLabel?: string
  tabListLabelVisible?: boolean
  tabListLabelClassName?: string
  tabClassName?: string
  tabPanelClassName?: string
}>

export function Tabs<T, P>(props: Props<T, P>) {
  const {
    data,
    renderTab,
    renderPanel,
    activeTabId,
    onSelect,
    children,
    tabListClassName,
    tabListLabel,
    tabListLabelVisible,
    tabListLabelClassName,
    tabClassName,
    tabPanelClassName,
  } = props

  const tabs = Object.values(data).map(({ tab, id }) => (
    <Tab
      id={id}
      className={tabClassName}
    >
      {renderTab(tab)}
    </Tab>
  ))

  const panel = renderPanel(data[activeTabId].panel)

  return (
    <>
      {tabListLabelVisible && (
        <label className={tabListLabelClassName}>
          {tabListLabel}
        </label>
      )}
      <div
        className={tabListClassName}
      >
        {tabs}
      </div>
      <div></div>
      <div>
        {panel}
      </div>
    </>
  )
}

export type { Props as TabsProps }
