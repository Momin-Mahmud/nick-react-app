import Home from "../../../pages/Home";
import AppLayout from "./layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../../pages/Login";
import ChatHome from "../../../pages/ChatHome";
import ProspectingCopilot from "../../../pages/ProspectingCopilot";
import Pricing from "../../../pages/Pricing";
import MyCompany from "../../../pages/MyCompany";
import Signup from "../../../pages/Signup";
import Onboarding from "../../../pages/Onboarding";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="prospecting" element={<ProspectingCopilot />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/company" element={<MyCompany />} />
          <Route path='/signup' element={<Signup />} />
          <Route path= '/onboarding' element={<Onboarding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
