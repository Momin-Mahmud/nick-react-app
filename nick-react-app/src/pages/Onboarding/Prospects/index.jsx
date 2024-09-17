import RadioButton from "../../../components/base/RadioButton/RadioButton";
import { useState } from "react";

const Prospects = ({ title, question, formData, setFormData }) => {
  const jobTitles = [
    "Professional Services",
    "Technology & Software",
    "Transportation & Logistics",
    "Manufacturing & Industrial",
    "Finance & Banking",
    "Creative and Advertising",
    "Telecommunications",
    "Government and Public Sector",
    "Healthcare & Pharmaceuticals",
    "Education & E-learning",
    "Media and Entertainment",
    "Nonprofit & Social Services",
    "Hospitality and Tourism",
    "Energy and Utilities",
    "Retail and Ecommerce",
    "Consumer Goods",
    "Real Estate and Construction",
  ];

  // Handle the selection of a job title
  const handleJobTitleChange = (selectedJob) => {
    if (question === "What Industry Are You In?") {
      const updatedIndustries = formData.industryAreYouIn.includes(selectedJob)
        ? formData.industryAreYouIn.filter((job) => job !== selectedJob)
        : [...formData.industryAreYouIn, selectedJob];
      setFormData({ ...formData, industryAreYouIn: updatedIndustries });
    } else {
      const updatedIndustries = formData.industryYouSellingTo.includes(
        selectedJob
      )
        ? formData.industryYouSellingTo.filter((job) => job !== selectedJob)
        : [...formData.industryYouSellingTo, selectedJob];
      setFormData({ ...formData, industryYouSellingTo: updatedIndustries });
    }
  };

  return (
    <div className="w-full bg-white p-12 justify-start items-start rounded-lg flex flex-col gap-6">
      <label className="block mb-2 text-3xl text-slate-800 font-bold">
        {title}
      </label>
      <label className="block mb-2 text-sm text-slate-800 font-semibold">
        {question}
      </label>
      <span className="mb-3 text-sm text-[#6B7280]">Select all that apply</span>
      <div className="grid grid-cols-2 gap-2">
        {jobTitles.map((jobTitle, index) => (
          <RadioButton
            label={jobTitle}
            key={index}
            selected={
              question === "What Industry Are You In?"
                ? formData.industryAreYouIn.includes(jobTitle)
                : formData.industryYouSellingTo.includes(jobTitle)
            }
            onChange={handleJobTitleChange}
          />
        ))}
        <RadioButton
          label={"Other"}
          labelEditable={true}
          selected={
            question === "What Industry Are You In?"
              ? formData.industryAreYouIn.includes("Other")
              : formData.industryYouSellingTo.includes("Other")
          }
          onChange={handleJobTitleChange}
        />
      </div>
    </div>
  );
};

export default Prospects;
