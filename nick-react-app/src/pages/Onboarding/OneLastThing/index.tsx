import FileUploader from "../../../components/base/FileUploader/FileUploader";
import React from "react";

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
      <div className="mb-3">
        <div className="flex items-center justify-between mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Yours Company's Website
          </label>
        </div>
        <input
          placeholder="Insert a link here"
          id="website-link"
          name="website-link"
          type="url"
          autoComplete="email"
          required
          className="block w-full text-sm rounded-md border-[1px] border-[#E5E7EB] py-1.5 px-2 shadow-sm  placeholder:text-gray-400 focus:outline-none bg-white"
          value={formData.companyWebsite}
          onChange={(e) =>
            setFormData({ ...formData, companyWebsite: e.target.value })
          }
        />
        <span className="text-xs text-[#6B7280] flex items-center justify-between mt-1">
          Leave blank if you don’t have one
        </span>
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
