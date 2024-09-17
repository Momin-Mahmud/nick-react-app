/* eslint-disable no-irregular-whitespace */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../utils/Icon";
import apiRequest from "../../utils/axios/api-request";
import loginImage from "../../assets/hero/loginImage.png";
import Visuals from "../../assets/hero/Visuals.png";
import Button from "../../components/base/Button/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const { data, error } = await apiRequest("post", `/auth/sign_in`, {
      data: userObj,
    });
    if (!error) {
      toast.success("Login Successfully.");
      console.log("Data: ", data);
      localStorage.setItem("user_id", data?.data?.user_id);
      localStorage.setItem("token", data?.data?.token);
      if (Object.keys(data?.data?.company_info).length != 0) {
        navigate("/chat");
      } else {
        navigate("/onboarding");
      }
    } else {
      toast.error("Invalid username or password.");
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full justify-center items-center h-[100vh] overflow-hidden">
        {/* <div className="sm:mx-auto flex items-center justify-center gap-2 sm:w-full sm:max-w-sm">
        <Icon size="40" name="logo" className="" />
        <span className="text-black tracking-tight text-2xl font-medium">
          salescopilots
        </span>
      </div> */}
        <div className="flex bg-transparent items-center justify-center relative h-[100vh]">
          <div className="flex flex-col bg-[#F3F4F6] items-center justify-center w-[50vw] px-24 mt-[32vh] mx-auto">
            <div className="text-black text-5xl text-left  font-bold">
              Create Relevant Messages to Your Propects in Seconds
            </div>
            <div className="text-left font-normal mt-2 text-xl w-full">
              Send the right message to the right executive at the right time
            </div>
            <div className="z-10">
              <img
                className="z-20"
                src={loginImage}
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
        <div className="w-[50vw] mx-auto">
          {/* <div className="space-y-6" action="#" method="POST">
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
        </div> */}
          <div className="flex h-[100vh] w-[50vw] flex-col justify-center items-center">
            <div className="flex items-start justify-start gap-2 w-[30vw]">
              <Icon size="50" name="logo" className="" />
              <span className="text-black tracking-tight text-4xl font-medium">
                salescopilots
              </span>
            </div>

            <div className="mt-14 w-[30vw] mx-auto">
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
              </div>
              <div>
                {/* <button
                onClick={() => navigate("/chat")}
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#8B5CF6] px-3 py-1.5 text-sm leading-6 hover:bg-[#C026D3]  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button> */}
              </div>
              <div>
                {/* <button
                onClick={() => navigate("/signup")}
                type="submit"
                className="flex w-full justify-center rounded-md text-[#8B5CF6] px-3 text-sm leading-6 shadow-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button> */}
                <div>
                  <div className="flex items-center justify-between mt-4">
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
                  <div className="mt-6">
                    <button
                      onClick={() => handleSubmit()}
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#A21CAF] px-3 py-1.5 mt-4 text-sm leading-6 hover:bg-[#C026D3]  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Log in
                    </button>
                  </div>
                  <div
                    className="text-sm flex items-center justify-center"
                    onClick={() => navigate("/signup")}
                  >
                    <a
                      href="#"
                      className="text-[#6B7280] font-light mt-4 hover:text-indigo-500"
                    >
                      No account yet?
                      <span className="px-1 text-[#A21CAF]">
                        Create an account
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center justify-center w-full my-6">
                    <hr className="border-t w-full border-gray-300" />
                    <span className="mx-4 text-gray-500">Or</span>
                    <hr className="border-t w-full border-gray-300" />
                  </div>
                </div>
                <div>
                  <Button
                    innerText="Sign in with Google"
                    icon="google"
                    iconSize={20}
                    onClick={() => handleSubmit()}
                    type="secondary"
                    className="flex w-full justify-center rounded-md px-3 mt-4 py-2 text-sm hover:bg-[white] text-black "
                  />
                </div>
                <div className="text-left mt-6">
                  <div>
                    By signing up to the SalesCoPilots platform you understand
                    and agree to our 
                    <span className="text-[#A21CAF] underline px-1">
                      Terms and Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-[#A21CAF] underline px-1">
                      Privacy Policy.
                    </span>{" "}
                    This site is protected by Google reCAPTCHA to ensure you’re
                    not a bot.
                  </div>
                  <div className="text-left mt-4 text-sm text-[#9CA3AF]">
                    Need help? Contact us at{" "}
                    <span className="text-[#A21CAF] underline px-1">
                      hello@salescopilot.com
                    </span>
                    <div className="text-lefttext-sm">
                      Copyright @ 2024 SalesCoPilots
                    </div>
                  </div>
                </div>
                <div>
                  {/* <button
                  type="submit"
                  className="flex w-full justify-center rounded-md text-[#8B5CF6] px-3 text-sm leading-6 shadow-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 z-0 mt-20 bottom-0">
          <img width={600} src={Visuals} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
