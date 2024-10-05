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
    problemSolvingForCustomers: "",
    differntOrBetterThanOthers: "",
    resultsOrProofsForCustomers: "",
    businessOutcomesForClients: "",
    bestTimeToReach: "",
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
      component: (
        <AlmostDone
          formData={formData}
          setFormData={setFormData}
          title="Tell us about your product..."
          question="What product or service are you selling?"
          description="Write a description of what your company sells..."
          helperText="e.g., Could based software, financial consulting services. The more detailed your are the more efficient your copilot will be."
          fieldKey="productsOrServicesSelling"
        />
      ),
    },
    {
      component: (
        <AlmostDone
          formData={formData}
          setFormData={setFormData}
          title="Tell us more..."
          question="What Problem Does Your Product or Service Solve for Customers?"
          description="Write a brief description of the problem your product or service solves"
          helperText="e.g., The problem we solve is high labor costs and low profit margins in the restaurant industry."
          fieldKey="problemSolvingForCustomers"
        />
      ),
    },
    {
      component: (
        <AlmostDone
          formData={formData}
          setFormData={setFormData}
          title="What makes you solution different..."
          question="How Do You Solve The Problem Differently Or Better Than Your Competition?"
          description="Write a description of how your product or service is better than your competitors"
          helperText="e.g., We help restaurants increase revenue by focusing on upselling during phone orders to drive the average check size."
          fieldKey="differntOrBetterThanOthers"
        />
      ),
    },
    {
      component: (
        <AlmostDone
          formData={formData}
          setFormData={setFormData}
          title="Let your track record do the talking..."
          question="What Results or Proof Points Do You Have for Customers?"
          description="Write a few short case studies highlighting the before-and-after scenarios, along with the KPIs your product or service has impacted."
          helperText="e.g., Denny's was missing 50% of their phone orders. After implementing our centralized call center service, we increased their average check size by 10% through upselling and boosted their off-premise revenue by 40% within 60 days."
          fieldKey="resultsOrProofsForCustomers"
        />
      ),
    },
    {
      component: (
        <AlmostDone
          formData={formData}
          setFormData={setFormData}
          title="You’re almost done..."
          question="What Business Outcomes Do You Achieve for Your Clients?"
          description="List the key KPIs, outcomes, or metrics your company impacts."
          helperText="e.g., Increased revenue, improved operational efficiency, decreased risk, increased profit margins."
          fieldKey="businessOutcomesForClients"
        />
      ),
    },
    {
      component: (
        <AlmostDone
          formData={formData}
          setFormData={setFormData}
          title="This is important..."
          question="When Are the Best Times to Reach Out or What Are the Best Trigger Events?"
          description="Provide examples of when it's the perfect time to use your product or service."
          helperText="e.g., A new office opening, a product launch, revenue decline, company growth, new leadership, adoption of specific technologies, mergers and acquisitions, or a new funding round."
          fieldKey="bestTimeToReach"
        />
      ),
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
    <div className="flex flex-col py-24">
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
