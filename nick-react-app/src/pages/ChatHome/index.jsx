import Icon from '../../utils/Icon';
import createtailored from '../../assets/hero/createtailored.png'
import updateprofile from '../../assets/hero/updateprofile.png'
import tailoredtracker from '../../assets/hero/tailoredtrack.png'
import importleads from '../../assets/hero/importleads.png'

const ChatHome = () => {

  const videos = [
    {
      id: '1',
      label: 'Update profile to Train AI',
      description: 'Help train our AI by sharing details about your products, services, proof points, case studies, and what makes you stand out.',
      image: updateprofile
    },
    {
      id: '2',
      label: 'Create Tailored Email Strategy',
      description: 'Create a tailored account strategy and email sequence with 5 personalized, research-backed reasons to contact prospects, aligned with your value proposition',
      image: createtailored
    },
    {
      id: '3',
      label: 'Tailored Talk Tracker for Outreach',
      description: 'Get 5 researched reasons to contact prospects, tied to your value proposition, plus a tailored strategy and unique talk tracks to connect effectively',
      image: tailoredtracker
    },
    {
      id: '4',
      label: 'Import Leads',
      description: 'Upload lead lists or manually input leads to create customized outreach for each lead.',
      image: importleads
    }
  ];
  return (
    <div className='w-[85vw] h-screen flex-col items-center flex justify-center'>
      <div className='flex flex-col items-center gap-1'>
        <div>
          <Icon name={'logoGray'} size='40' className='mx-3' />
        </div>
        <div className='font-bold text-2xl'>Hello John !</div>
        <div className=''>We are excited to see you here!</div>
      </div>
      <div>
        <div className='mt-2'>
          {/* <div style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px -50px 20px -40px inset'}} className='p-4 text-sm text-left flex flex-col justify-start items-start gap-2 border-[1px] rounded-xl border-[#E9E9E9]'>
            <div className='font-semibold text-[#4B5563]'>Getting started</div>
            <div className='flex flex-col gap-2 text-xs'>
              {todoItems.map((item) => (
                  <div key={item.id} className='flex items-center gap-2'>
                      {item.status === 'done' ? <Icon name={'tickWhite'} size='12' className='p-0.5 rounded-full bg-[#6D28D9]' /> : 
                      <span className='w-3 h-3 rounded-full border-[1px] border-[#999999]'>
                      </span>
                       }
                    <div>{item.label}</div>
                  </div>
              ))}
            </div>
          </div> */}
          <div className='mt-4 flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-3'>
              {videos.map((item) => (
                <div className='rounded-md transform transition-transform duration-300 hover:translate-y-[-5px] w-[15vw] cursor-pointer'key={item.id}>
                  <div className='bg-white border-[1px] flex flex-col items-center justify-start text-xs h-[32vh] rounded-md overflow-hidden shadow-2xl border-[#E9E9E9]'>
                    <img src={item.image} className='w-[12vw] h-[12vh] object-contain '
                    />
                    <div className='p-3 flex flex-col items-start justify-start gap-2'>
                      <div className='text-left font-bold'>
                        {item.label}
                      </div>
                      <div className='text-left'>
                        {item.description}
                      </div>
                      </div>
                  </div>
                  <div>
                  </div>
                </div>
              ))}
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHome;
