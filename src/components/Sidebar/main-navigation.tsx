import {
  BarChart2,
  CheckSquare,
  Flag,
  Home,
  Layers3,
  Users,
} from 'lucide-react'
import { NavItem } from './nav-item'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} isSubMenu />
      <NavItem title="Dashboard" icon={BarChart2} isSubMenu />
      <NavItem title="Projects" icon={Layers3} isSubMenu />
      <NavItem title="Tasks" icon={CheckSquare} isSubMenu />
      <NavItem title="Reporting" icon={Flag} isSubMenu />
      <NavItem title="Users" icon={Users} isSubMenu />
    </nav>
  )
}
