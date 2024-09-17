const AlmostDone = ({ formData, setFormData }) => {
  return (
    <div className="w-[30vw] bg-white p-12 pb-52 justify-start items-start rounded-lg flex flex-col gap-2">
      <label className="block mb-1 text-3xl text-slate-800 font-bold">
        Almost Done
      </label>
      <label className="block mb-1 text-sm text-slate-800 font-semibold">
        What product or service are you selling?
      </label>
      <textarea
        rows={5}
        className="w-full bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        placeholder={`Write a description of what your company sells...`}
        value={formData.productsOrServicesSelling}
        onChange={(e) =>
          setFormData({
            ...formData,
            productsOrServicesSelling: e.target.value,
          })
        }
      />
      <span className="text-sm text-[#6B7280]">
        e.g., Could based software, financial consulting services. The more
        detailed your are the more efficient your copilot will be.
      </span>
    </div>
  );
};
export default AlmostDone;
