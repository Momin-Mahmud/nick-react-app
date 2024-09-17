const Basics = ({ formData, setFormData }) => {
  const roles = [
    "COO",
    "CFO",
    "CTO",
    "Director",
    "Manager",
    "Partner",
    "Sales",
    "Other",
  ];
  const companySize = ["0-9", "10-49", "50-249", "250-999", "1000+"];

  return (
    <div className="w-full bg-white p-16 justify-start items-start rounded-lg flex flex-col gap-6">
      <div className="text-3xl font-bold text-left">
        Lets start with the Basics
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <label className="block mb-1 text-sm text-slate-800 font-semibold">
          Your Name
        </label>
        <input
          type="text"
          className="w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          placeholder={`Full Name Here`}
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <label className="block mb-1 text-sm text-slate-800 font-semibold">
          Company Name
        </label>
        <input
          type="text"
          className="w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          placeholder={`Write your company's name here`}
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
        />
        <div>
          <span className="text-sm text-[#6B7280]">e.g., Acme Corp.</span>
        </div>
      </div>
      {/*Roles dropdown */}
      <div className="flex flex-col items-start justify-start w-full">
        <label className="block mb-1 text-sm text-slate-800 font-semibold">
          Your Role
        </label>
        <select
          className="w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="" disabled selected>
            Select One
          </option>
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      {/* Company size dropdown */}
      <div className="flex flex-col items-start justify-start w-full">
        <label className="block mb-1 text-sm text-slate-800 font-semibold">
          Your Company Size
        </label>
        <select
          className="w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          value={formData.companySize}
          onChange={(e) =>
            setFormData({ ...formData, companySize: e.target.value })
          }
        >
          <option value="" disabled selected>
            Placeholder
          </option>
          {companySize.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="flex flex-col items-start justify-start w-full">
        <label className="block mb-1 text-sm text-slate-800 font-semibold">
          Your Company Size
        </label>
        <input
          type="text"
          className="w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          placeholder={`Placeholder`}
          value={formData.companySize}
          onChange={(e) =>
            setFormData({ ...formData, companySize: e.target.value })
          }
        />
      </div> */}
    </div>
  );
};

export default Basics;
