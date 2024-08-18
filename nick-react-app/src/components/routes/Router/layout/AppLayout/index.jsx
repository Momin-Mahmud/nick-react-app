import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const AppLayout = () => {

  const { pathname } = useLocation()
  const renderHeader = () =>  (pathname !== '/login' && pathname !== '/chat') && <Header/>  


  return (
    <div className='min-h-screen'>
      {renderHeader()}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout