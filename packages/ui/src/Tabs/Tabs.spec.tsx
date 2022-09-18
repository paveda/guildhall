import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { Tabs } from '.'

describe('Tabs', () => {
  it('should render correctly', () => {
    render(
      <Tabs
        data={}
        activeTabId="2"
        onSelect={() => console.log("select")}
      />
    )

    expect(screen.getAllByRole('tab')).toHaveLength(3)
  })
})