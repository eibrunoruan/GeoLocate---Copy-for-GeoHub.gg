import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'
import { MobileNav, Navbar, Sidebar } from '@components/layout'
import { StyledLayout } from './'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { asPath } = useRouter()

  useEffect(() => {
    document.getElementById('main')?.scrollTo({ top: 0 })
  }, [asPath])

  return (
    <StyledLayout>
      <div className="app-layout">
        <Navbar />

        <div className="appBody">
          <Sidebar />

          <main id="main">{children}</main>
        </div>

        <MobileNav />
      </div>
    </StyledLayout>
  )
}

export default Layout
