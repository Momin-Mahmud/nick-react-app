import { useNavigate } from "react-router-dom";
import Icon from "../../../../../../utils/Icon";
import Button from "../../../../../base/Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const items = [
    {
      name: "Platform",
      path: "/chat",
    },
    // {
    //   name: "Industries",
    //   path: "/home",
    // },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "About",
      path: "/onboarding",
    },
    // {
    //   name: "Blog",
    //   path: "#",
    // },
    // {
    //   name: "Resources",
    //   path: "#",
    // },
  ];

  return (
    <header className="bg-white border-b-2 border-gray-200 h-[6vh] ">
      <nav
        className="flex items-center justify-between mx-4 px-16 py-2 lg:px-8"
        aria-label="Global"
      >
        <div
          className="flex lg:flex-1 gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="-m-1.5 p-1.5">
            <Icon size="30" name="logo" className="" />
          </span>
          <span className="text-black mt-1 tracking-tight font-black">
            salescopilots
          </span>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {items.map((item) => (
            <span
              key={item.name}
              onClick={() => navigate(item.path)}
              className="text-md cursor-pointer font-semibold p-3 rounded-lg hover:text-[#C026D3] leading-6 text-gray-900"
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Button
            onClick={() => navigate("/login")}
            type="secondary"
            innerText="Log in"
          />
          <Button onClick={() => navigate("/signup")} innerText="Sign up" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
