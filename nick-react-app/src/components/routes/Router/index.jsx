import Home from "../../../pages/Home"
import AppLayout from "./layout/AppLayout"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from "./layout/AppLayout/Sidebar"
import Login from "../../../pages/Login"

const Router = () => {
  console.log("HEY ROUTER")
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
        <Route path='/' element= {<Home/>}/>
        <Route path= '/chat' element= {<Sidebar/>}/>
        <Route path='/login' element= {<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default Router