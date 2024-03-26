'use client'

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarFooter,
} from '@/components/dashboard/sidebar'
import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/logo'

export function MainSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader className="flex items-center gap-2">
        <Logo />
        <h1 className=" font-bold">Tasks</h1>
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="size-3 mr-3" />
              Tasks
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="size-3 mr-3" />
              Settings
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              More Links
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app">
              Need help?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/app/settings">
              Website
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}