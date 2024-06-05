import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
    const theme = useSelector((state) => state.theme)
    return (
        <div style={{ height: '100vh' }} className={theme}>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
