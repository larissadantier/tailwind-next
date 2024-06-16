'use client'

import { LifeBuoy, Menu, Search, Settings } from 'lucide-react'

import { InputControl, InputPrefix, InputRoot } from '../Form/input'

import { MainNavigation } from './components/MainNavigation'
import { NavItem } from './components/NavItem'
import { UsedSpaceWidget } from './components/UsedSpaceWidget'
import { LogoSVG } from './components/logo'
import { Profile } from './components/profile'
import { Button } from '../Button'

import * as Collpasible from '@radix-ui/react-collapsible'

export default function Aside() {
  return (
    <Collpasible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-r border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 lg:py-8">
          <LogoSVG />
          <span className="text-xl font-semibold text-zinc-900">
            Untitled UI
          </span>
        </div>

        <Collpasible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collpasible.Trigger>
      </div>

      <Collpasible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>

          <InputControl type="text" placeholder="Search" />
        </InputRoot>

        <MainNavigation />
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Settings} />
          </nav>

          <UsedSpaceWidget />

          <Profile />
        </div>
      </Collpasible.Content>
    </Collpasible.Root>
  )
}
