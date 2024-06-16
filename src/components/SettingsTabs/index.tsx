'use client'
import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
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
            <TabItem
              value="team"
              title="Team"
              isSelected={currentTab === 'team'}
            />
            <TabItem
              value="plan"
              title="Plan"
              isSelected={currentTab === 'plan'}
            />
            <TabItem
              value="integrations"
              title="Integrations"
              isSelected={currentTab === 'integrations'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="roudend-lg relative flex-1 bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
