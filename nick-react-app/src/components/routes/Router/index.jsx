import Home from "../../../pages/Home";
import AppLayout from "./layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../../pages/Login";
import ChatHome from "../../../pages/ChatHome";
import { Navigate } from "react-router-dom";
import React from "react";
import ProspectingCopilot from "../../../pages/ProspectingCopilot";
import Pricing from "../../../pages/Pricing";
import MyCompany from "../../../pages/MyCompany";
import Signup from "../../../pages/Signup";
import Onboarding from "../../../pages/Onboarding";
import PaymentSuccessful from "../../base/PricingCard/PaymentSuccessful";
import PaymentCancelled from "../../base/PricingCard/PaymentCancelled";

const Router = () => {

  const GUARD_ROUTE = (props) => {
    const { children } = props;
    if (localStorage.getItem("token") )
      return <React.Fragment>{children}</React.Fragment>;
    return <Navigate to={'/login'} replace />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={
            <GUARD_ROUTE>
              <ChatHome />
            </GUARD_ROUTE>  
          } />
          <Route path="/login" element={<Login />} />
          <Route path="prospecting" element={
            <GUARD_ROUTE>
              <ProspectingCopilot />
            </GUARD_ROUTE> 
          } />
          <Route path="/pricing" element={
            <GUARD_ROUTE>
              <Pricing />
            </GUARD_ROUTE>  
          } />
          <Route path="/company" element={
            <GUARD_ROUTE>
              <MyCompany />
            </GUARD_ROUTE>
          }/>
            <Route path="/payment-successful" element={
            <GUARD_ROUTE>
              <PaymentSuccessful />
            </GUARD_ROUTE>
          } />
          <Route path="/payment-cancelled" element={
            <GUARD_ROUTE>
              <PaymentCancelled />
            </GUARD_ROUTE>
          }/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/onboarding' element={
            <GUARD_ROUTE>
              <Onboarding />
              </GUARD_ROUTE>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
