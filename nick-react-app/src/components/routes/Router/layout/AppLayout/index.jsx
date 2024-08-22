import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'


const AppLayout = () => {

  const { pathname } = useLocation()
  const checkPages = () =>  (pathname !== '/login' && pathname !== '/chat' && pathname !== '/prospecting')  


  return (
    <div className={`${checkPages() ? 'min-h-screen' : 'flex'}`}>
      {checkPages() ? <Header/> : <Sidebar/>}
      <div>
        <Outlet />
      </div>
      {checkPages() && <Footer />}
    </div>
  )
}

export default AppLayout