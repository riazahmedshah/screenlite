import { Outlet } from 'react-router'
import { Header } from '@shared/components/Header'
import { NavbarUserMenu } from '@shared/components/NavbarUserMenu'
import { LayoutBodyContainer } from '@shared/components/LayoutBodyContainer'

export const UserFullWidthSettingsPagesLayout = () => {
    return (
        <div className="flex flex-col grow w-full bg-slate-100">
            <Header>
                <div className='flex grow justify-end'>
                    <NavbarUserMenu />
                </div>
            </Header>
            <div className="flex grow px-3">
                <LayoutBodyContainer>
                    <Outlet />
                </LayoutBodyContainer>
            </div>
        </div>
    )
}
