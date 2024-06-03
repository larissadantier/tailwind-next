import { LifeBuoy, Search, Settings } from 'lucide-react'

import { InputControl, InputPrefix, InputRoot } from '../input'

import { LogoSVG } from './components/logo'
import { MainNavigation } from './components/main-navigation'
import { NavItem } from './components/nav-item'
import { UsedSpaceWidget } from './components/used-space-widget'
import { Profile } from './components/profile'

export default function Aside() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <div className="flex items-center gap-2.5">
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
