import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../utils/Icon";
import apiRequest from "../../utils/axios/api-request";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userObj = {
      email: formData.email,
      password: formData.password,
    };
    const { data, error } = await apiRequest("post", "/auth/sign_in", {
      data: userObj,
    });
    console.log("Data: ", data);
    console.log("Error: ", error);
    // if (!error) {
    // } else {
    // }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
      <div className="sm:mx-auto flex items-center justify-center gap-2 sm:w-full sm:max-w-sm">
        <Icon size="40" name="logo" className="" />
        <span className="text-black tracking-tight text-2xl font-medium">
          salescopilots
        </span>
      </div>

      <div className="mt-20 w-[30vw] mx-auto">
        <div className="space-y-6" action="#" method="POST">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Enter your email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full text-sm rounded-md border-[1px] border-[#E5E7EB] py-1.5 px-2 shadow-sm  placeholder:text-gray-400 focus:outline-none bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="**********"
                id="password"
                name="password"
                type="password"
                autoComplete="email"
                required
                className="block w-full text-sm rounded-md border-[1px] border-[#E5E7EB] py-1.5 px-2 shadow-sm  placeholder:text-gray-400 focus:outline-none bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="text-sm flex items-start">
              <a
                href="#"
                className="text-[#6B7280] font-light mt-1 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#8B5CF6] px-3 py-1.5 text-sm leading-6 hover:bg-[#C026D3]  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md text-[#8B5CF6] px-3 text-sm leading-6 shadow-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
