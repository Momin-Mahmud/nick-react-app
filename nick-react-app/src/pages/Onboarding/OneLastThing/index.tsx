import FileUploader from "../../../components/base/FileUploader/FileUploader";
import React from "react";
import InputField from "../../../components/base/InputField/InputField";

const OneLastThing = ({ formData, setFormData }) => {
  return (
    <div className="w-[40vw] bg-white p-12 pb-52 justify-start items-start rounded-lg flex flex-col gap-2">
      <label className="block mb-1 text-3xl text-slate-800 font-bold">
        One Last Thing...
      </label>
      <label className="block mb-1 text-sm text-slate-800 font-semibold">
        Any resources you have from your company that could give us more
        insights?
      </label>
      <label className="text-sm text-[#6B7280] text-left">
        This will super power the output of your copilots to truly know inside
        out what you sell and do, making your results 100x better. So take your
        time here, it is worth it, we promise!
      </label>
      <div className='text-left mt-4 flex-grow flex-col flex justify-center'>
      <label className='block mb-2 text-sm text-slate-800 font-semibold'>
        Your Company's Website
      </label>
      <InputField formData={formData} setFormData={setFormData} />
      <span className='text-sm text-[#6B7280] mt-2'>Leave blank if you don’t have one</span>
    </div>
      <FileUploader label="Upload Any Relevant Docs or Presentations" />
      <span className="text-sm text-[#6B7280] text-left">
        Upload your sales decks, white papers, case studies, or any relevant
        PDFs here. These materials help the AI learn from your proven successes,
        ensuring it generates precise and persuasive messaging tailored to your
        business.
      </span>
    </div>
  );
};

export default OneLastThing;
