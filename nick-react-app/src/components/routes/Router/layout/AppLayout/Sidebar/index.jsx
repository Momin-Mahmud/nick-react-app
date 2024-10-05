import Icon from "../../../../../../utils/Icon";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import apiRequest from "../../../../../../utils/axios/api-request";
import { useRecoilState } from "recoil";
import { sessionDetail } from "../../../../../../atom";

const ProspectList = ({ isOpen, sessionDetails }) => {
  const [sessionData, setSessionData] = useState({});
  const [selectedSessionDetail, setSelectedSessionDetail] =
    useRecoilState(sessionDetail);

  const handleSessionClick = async (session) => {
    console.log(session);
    const { data, error } = await apiRequest(
      "get",
      `session/user_sessions/${session?.session_id}`
    );
    if (error == null) {
      console.log(data?.data);
      setSessionData(data?.data);
      setSelectedSessionDetail(data?.data);
    } else {
      console.error("Error: ", error);
    }
  };

  return (
    <div
      className={`flex flex-col transition-[max-height] min-w-full duration-300 ease-in-out overflow-y-auto rounded-md ${
        isOpen ? "max-h-32" : "max-h-0"
      }`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -40px inset" }}
    >
      <span className="p-1">
        {sessionDetails?.map((session, index) => (
          <div
            className="text-xs text-left"
            key={index}
            onClick={() => handleSessionClick(session)}
          >
            {session?.session_title}
          </div>
        ))}
      </span>
    </div>
  );
};

const DiscoveryList = ({ isOpen }) => {
  const discoveries = [
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
    "Executive Message for CEO...",
  ];

  return (
    <div
      className={`flex flex-col transition-[max-height] duration-300 ease-in-out overflow-y-auto rounded-md ${
        isOpen ? "max-h-32" : "max-h-0"
      }`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -40px inset" }}
    >
      <span className="p-1">
        {discoveries.map((discovery, index) => (
          <div className="text-xs" key={index}>
            {discovery}
          </div>
        ))}
      </span>
    </div>
  );
};

const Sidebar = () => {
  const [prospectsOpen, setProspectsOpen] = useState(false);
  const [discoveriesOpen, setDiscoveriesOpen] = useState(false);
  const [sessionDetails, setSessionDetails] = useState([]);
  const navigate = useNavigate();

  const handleProspectClick = async () => {
    if (sessionDetails.length <= 0 && !prospectsOpen) {
      const { data, error } = await apiRequest("get", "/session/user_sessions");
      if (error == null) {
        const filteredData = data?.data
          ?.map((session) => ({
            ...session,
            session_title: session?.session_title.replace(/^"|"$/g, ""), // Remove leading and trailing quotes
          }))
          .filter((session) => session?.session_title !== "");

        setSessionDetails(filteredData);
      } else {
        console.error("Error: ", error);
      }
    }
    setProspectsOpen(!prospectsOpen);
  };

  return (
    <div className="min-h-full w-[calc(100vw-85vw)] bg-white p-2 border-r flex flex-col gap-4 justify-between items-stretch">
      <div className="flex flex-col justify-between items-center gap-8">
        <div className="flex gap-4 items-center justify-center mt-3 w-full">
          <div className="flex gap-2 justify-start items-start ">
            <Icon name={"logo"} size="26" />
            <span className="text-black font-black">salescopilots</span>
          </div>
          <Icon name={"menu"} size="16" />
        </div>
        <div>
          <form className="max-w-md mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon name={"search"} size="14" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-1.5 border-2 focus:outline-none rounded-lg border-#E5E7EB text-xs ps-10 bg-white"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col items-start justify-start min-w-full gap-2">
          <NavItem
            navigationPath={"/chat"}
            className="mt-1"
            icon="homeBlack"
            selectedIcon="home"
            size="22"
            text="Home"
          />
          <div
            className="flex flex-col gap-0 items-center justify-center min-w-full cursor-pointer hover:bg-[#F5F3FF]"
            onClick={() => navigate("/prospecting")}
          >
            <div className="flex items-center justify-between gap-1 min-w-full">
              <div
                className="flex items-center text-start justify-between gap-2 min-w-full p-2 rounded-lg"
                onClick={() => handleProspectClick()}
              >
                <div className="flex items-center gap-1">
                  <Icon name="prospecting" size="20" />
                  <span className="tracking-tight mb-2 text-sm font-medium">
                    Prospecting
                  </span>
                  {sessionDetails?.length > 0 && (
                    <span className="px-2 mb-1 bg-[#F3F4F6] rounded-full text-xs">
                      {sessionDetails?.length}
                    </span>
                  )}
                </div>
                <Icon
                  name="chevrondDown"
                  size="12"
                  className={`transform transition-transform duration-300 ${
                    prospectsOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <ProspectList
              isOpen={prospectsOpen}
              sessionDetails={sessionDetails}
            />
          </div>
        </div>
        <div className="min-w-full p-2">
          <div className="flex flex-col items-center text-start justify-start gap-1 min-w-full rounded-lg">
            <span className="tracking-tight text-[#737373] text-xs min-w-full font-medium">
              Manage
            </span>
            <NavItem
              navigationPath={"/company"}
              icon="myCompany"
              selectedIcon="myCompany"
              size="16"
              text="My company"
            />
          </div>
        </div>
      </div>
        <div>
        <div className="min-w-full p-2 mb-4">
          <div className="flex flex-col items-center text-start justify-start gap-1 min-w-full rounded-lg">
            <NavItem
              icon="support"
              selectedIcon="support"
              size="16"
              text="Support"
            />
            <NavItem icon="settings" size="16" text="Settings" />
          </div>
        </div>
          <div className="min-w-full mb-2 flex gap-3 py-1 rounded-md items-center justify-center bg-[#F3F4F6]">
            <img
              src={
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="logo"
              className="w-8 h-8 object-cover rounded-full"
            />
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold">
                {localStorage.getItem("name") || "User"}
              </span>
              <span className="text-[10px]">
                {localStorage.getItem("email") || "Email"}
              </span>
            </div>
            <Icon
              className="cursor-pointer"
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
              name="logout"
              size="16"
            />
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
