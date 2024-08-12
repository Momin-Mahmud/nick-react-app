import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const AppLayout = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout