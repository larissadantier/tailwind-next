'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tab-item'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="my-details"
          title="My details"
          isSelected={currentTab === 'my-details'}
        />
        <TabItem
          value="profile"
          title="Profile"
          isSelected={currentTab === 'profile'}
        />
        <TabItem value="team" title="Team" isSelected={currentTab === 'team'} />
        <TabItem value="plan" title="Plan" isSelected={currentTab === 'plan'} />
        <TabItem
          value="integrations"
          title="Integrations"
          isSelected={currentTab === 'integrations'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
