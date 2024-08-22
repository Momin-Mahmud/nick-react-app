import Icon from '../../utils/Icon';

const ChatHome = () => {
  const todoItems = [
    {
      id: '1',
      label: 'Upload company data',
      status: 'done'
    },
    {
      id: '2',
      label: 'Describe you ideal client',
      status: 'in_progress'
    },
    {
      id: '3',
      label: 'Some other item for context',
      status: 'in_progress'
    }
  ];

  const videos = [
    {
      id: '1',
      label: 'Step by step guide',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBjb3Vyc2UlMjB0aHVtYm5haWx8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: '2',
      label: 'Advanced features',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBjb3Vyc2UlMjB0aHVtYm5haWx8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: '3',
      label: 'Video tutorials',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBjb3Vyc2UlMjB0aHVtYm5haWx8ZW58MHx8MHx8fDA%3D'
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
          <div style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px -50px 20px -40px inset'}} className='p-4 text-sm text-left flex flex-col justify-start items-start gap-2 border-[1px] rounded-xl border-[#E9E9E9]'>
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
          </div>
          <div className='mt-4 flex flex-col gap-4'>
            <div className='w-full text-start'>
              Learning Vault
            </div>
          <div className='flex items-center justify-center gap-3'>
              {videos.map((item) => (
                <div className='rounded-md transform transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer'key={item.id}>
                  <div className='bg-white border-[1px] text-xs rounded-md overflow-hidden shadow-2xl border-[#E9E9E9]'>
                    <img src={item.image} className='w-[12vw] h-[12vh] object-cover'
                    />
                    <div className='p-3 flex items-center justify-start gap-2'>
                      <Icon name = 'videoPlay' size='12' className='p-0.5 rounded-full bg-[#6D28D9]' />
                      <div>
                        {item.label}
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
