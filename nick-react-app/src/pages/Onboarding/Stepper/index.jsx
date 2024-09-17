import Basics from "./Basics";
import { useState } from "react";
import Icon from "../../../utils/Icon";
import Prospects from "../Prospects";
import AlmostDone from "../AlmostDone";
import OneLastThing from "../OneLastThing";
import Saving from "../Saving";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    role: "",
    companySize: "",
    industryAreYouIn: [],
    industryYouSellingTo: [],
    productsOrServicesSelling: "",
    companyWebsite: "",
  });
  const steps = [
    {
      component: <Basics formData={formData} setFormData={setFormData} />,
    },
    {
      component: (
        <Prospects
          title="A Little More About You..."
          question="What Industry Are You In?"
          formData={formData}
          setFormData={setFormData}
        />
      ),
    },
    {
      component: (
        <Prospects
          title="Now, About Your Prospects..."
          question="What Industries Are You Selling In To?"
          formData={formData}
          setFormData={setFormData}
        />
      ),
    },
    {
      component: <AlmostDone formData={formData} setFormData={setFormData} />,
    },
    {
      component: <OneLastThing formData={formData} setFormData={setFormData} />,
    },
    {
      component: <Saving formData={formData} />,
    },
  ];

  const handleNext = () => {
    // Log the data when advancing to the next step
    console.log("Current Form Data: ", formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="flex flex-col">
      {steps[activeStep].component}
      <div className="w-full">
        <progress
          className="progress-bar w-full"
          value={activeStep}
          max={steps.length - 1}
        ></progress>
      </div>
      <div className="flex justify-between mt-4 cursor-pointer">
        <div></div>
        {activeStep !== steps.length - 1 && (
          <span
            onClick={handleNext}
            className="text-[#710BA3] flex gap-2 items-center"
          >
            <span>Next</span>
            <Icon name="rightArrow" size="18" />
          </span>
        )}
      </div>
    </div>
  );
};

export default Stepper;
