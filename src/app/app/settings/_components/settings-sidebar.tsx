'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink
            href="app/settings"
            children="My profile"
            active={isActive('/app/settings')}
          />
          <DashboardSidebarNavLink
            href="app/settings/theme"
            children="Theme"
            active={isActive('/app/settings/theme')}
          />
          <DashboardSidebarNavLink
            href="app/settings/theme/billing"
            children="Billing"
            active={isActive('/app/settings/billing')}
          />
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  )
}
