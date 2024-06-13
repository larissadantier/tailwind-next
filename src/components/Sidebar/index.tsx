import { LifeBuoy, Search, Settings } from 'lucide-react'

import { InputControl, InputPrefix, InputRoot } from '../Form/input'

import { LogoSVG } from './components/logo'
import { MainNavigation } from './components/main-navigation'
import { NavItem } from './components/nav-item'
import { UsedSpaceWidget } from './components/used-space-widget'
import { Profile } from './components/profile'

export default function Aside() {
  return (
    <aside className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-r border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r">
      <div className="flex items-center gap-2.5 lg:px-5 lg:py-8">
        <LogoSVG />
        <span className="text-xl font-semibold text-zinc-900">Untitled UI</span>
      </div>

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
    </aside>
  )
}
