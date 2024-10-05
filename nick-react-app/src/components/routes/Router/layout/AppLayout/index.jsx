import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const { pathname } = useLocation();
  const checkPages = () =>
    pathname !== "/chat" &&
    pathname !== "/prospecting" &&
    pathname !== "/company" &&
    pathname !== "/onboarding" &&
    pathname !== "/signup" &&
    pathname !== "/login";

  const renderSiderBar = () => 
    pathname !== "/onboarding" &&
      pathname !== "/signup" &&
      pathname !== "/login";

  return (
    <div className={`${checkPages() ? "min-h-screen" : "flex min-h-full"}`}>
      {checkPages() ? <Header /> : renderSiderBar() && <Sidebar />}
        <Outlet />
    </div>
  );
};

export default AppLayout;
