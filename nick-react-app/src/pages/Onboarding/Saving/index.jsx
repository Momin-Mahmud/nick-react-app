import saving from "../../../assets/hero/saving.png";
import { useState, useEffect } from "react";
import apiRequest from "../../../utils/axios/api-request";
import { useNavigate } from "react-router-dom";

const Saving = ({ formData }) => {
  const navigate = useNavigate();

  useEffect(async () => {
    await saveCompanyInformation(formData);
  }, []);

  const saveCompanyInformation = async (formData) => {
    console.log(formData);
    const obj = {
      user_id: localStorage.getItem("user_id") ?? "",
      name: formData.name,
      company_info: {
        companyName: formData.companyName,
        role: formData.role,
        companySize: formData.companySize,
        industryAreYouIn: formData.industryAreYouIn,
        industryYouSellingTo: formData.industryYouSellingTo,
        productsOrServicesSelling: formData.productsOrServicesSelling,
        companyWebsite: formData.companyWebsite,
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
