const AlmostDone = ({
  formData,
  setFormData,
  title,
  question,
  description,
  helperText,
  fieldKey,
}) => {
  return (
    <div className="w-[30vw] bg-white p-12 pb-52 justify-start items-start rounded-lg flex flex-col gap-2">
      <label className="block mb-1 text-3xl text-slate-800 font-bold">
        {title}
      </label>
      <label className="block mb-1 text-sm text-slate-800 font-semibold">
        {question}
      </label>
      <textarea
        rows={5}
        className="w-full bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        placeholder={description}
        value={formData[fieldKey]}
        onChange={(e) =>
          setFormData({
            ...formData,
            [fieldKey]: e.target.value,
          })
        }
      />
      <span className="text-sm text-[#6B7280]">{helperText}</span>
    </div>
  );
};
export default AlmostDone;
