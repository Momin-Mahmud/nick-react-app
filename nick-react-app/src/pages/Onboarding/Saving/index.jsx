import saving from '../../../assets/hero/saving.png'

const Saving = () => {
    return (
        <div className='w-[36vw] bg-white p-12 pb-52 justify-start items-start rounded-lg flex flex-col gap-2'>
            <div className='w-full h-full mt-3 justify-center flex items-center'>
            <img src={saving} width={100}/>
            </div>
          <label className='block mb-1 text-3xl text-slate-800 font-bold'>
            Analyzing and Saving Your information...
            </label>
        </div>
      );
}

export default Saving