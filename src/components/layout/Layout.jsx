import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackgroundAnimation from '../effects/BackgroundAnimation'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen pr-10 pl-14 " >
      <BackgroundAnimation />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout