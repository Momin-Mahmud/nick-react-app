import RadioButton from '../../../components/base/RadioButton/RadioButton'

const Prospects = () => {
    const jobTitles = ['Professional Services ', 'Technology & Software', 'Transportation & Logistics', 'Manufacturing & Industrial', 'Finance & Banking', 'Craetive and Advertising', 'Telecommunications', 'Government and Public Sector', 'Healthcare & Pharmaceuticals', 'Education & E-learning', 'Media and Entertainment', 'Nonprofit & Social Services', 'Hospitatlity and Tourism', 'Energy and Utilities', 'Retail and Ecommerce', 'Consumer Goods', 'Real Estate and Construction']
    return (
      <div className='w-full bg-white p-12 justify-start items-start rounded-lg flex flex-col gap-6'>
      <label className='block mb-2 text-3xl text-slate-800 font-bold'>
      Now, About Your Prospects...
        </label>
        <label className='block mb-2 text-sm text-slate-800 font-semibold'>
        What Industry Are Your Potential Cleints In?
        </label>
        <span className='mb-3 text-sm text-[#6B7280]'>Select all that apply</span>
        <div className='grid grid-cols-2 gap-2'>
          {jobTitles.map(jobTitle => (
            <RadioButton label={jobTitle}/>
          ))}
          <RadioButton label={'Other'} labelEditable={true}/>
        </div>
      </div>
    )
}

export default Prospects