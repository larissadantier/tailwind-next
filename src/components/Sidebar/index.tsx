import { LifeBuoy, Search, Settings } from 'lucide-react'
import { LogoSVG } from './logo'
import { MainNavigation } from './main-navigation'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'

export default function Aside() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <div className="flex items-center gap-2.5">
        <LogoSVG />
        <span className="text-xl font-semibold text-zinc-900">Untitled UI</span>
      </div>

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 outline-none placeholder:text-zinc-600"
          type="text"
          placeholder="Search"
        />
      </div>

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
