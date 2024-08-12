import Dashboard from "../../../pages/Dasboard"
import AppLayout from "./layout/AppLayout"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  console.log("HEY ROUTER")
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
        <Route path='/' element= {<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default Router