import saving from "../../../assets/hero/saving.png";
import { useState, useEffect } from "react";
import apiRequest from "../../../utils/axios/api-request";
import { useNavigate } from "react-router-dom";

const Saving = ({ formData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    saveCompanyInformation(formData);
  }, []);

  const saveCompanyInformation = async (formData) => {
    console.log(formData);
    const obj = {
      user_id: localStorage.getItem("user_id") ?? "",
      name: formData.name,
      company_info: {
        "What is the name of your business?": formData.companyName,
        "What is your role?": formData.role,
        "How many employees do you have?": formData.companySize,
        "What Industry Are You In?": formData.industryAreYouIn,
        "What Industries Are You Selling In To?": formData.industryYouSellingTo,
        "What product or service are you selling?":
          formData.productsOrServicesSelling,
        "What Problem Does Your Product or Service Solve for Customers?":
          formData.problemSolvingForCustomers,
        "How Do You Solve The Problem Differently Or Better Than Your Competition?":
          formData.differntOrBetterThanOthers,
        "What Results or Proof Points Do You Have for Customers?":
          formData.resultsOrProofsForCustomers,
        "What Business Outcomes Do You Achieve for Your Clients?":
          formData.businessOutcomesForClients,
        "What is the best time to reach you?": formData.bestTimeToReach,
        "What is the website of your business?": formData.companyWebsite,
      },
    };

    console.log("Obj is: ", obj);
    const { data, error } = await apiRequest(
      "post",
      `/auth/save_company_info`,
      {
        data: obj,
      }
    );
    if (!error) {
      console.log("Data: ", data);
      navigate("/chat");
    } else {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="w-[36vw] bg-white p-12 pb-52 justify-start items-start rounded-lg flex flex-col gap-2">
      <div className="w-full h-full mt-3 justify-center flex items-center">
        <img src={saving} width={100} />
      </div>
      <label className="block mb-1 text-3xl text-slate-800 font-bold">
        Analyzing and Saving Your information...
      </label>
    </div>
  );
};

export default Saving;
