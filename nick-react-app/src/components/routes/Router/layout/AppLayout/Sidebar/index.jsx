import Icon from '../../../../../../utils/Icon';
import { useState } from 'react';
import Button from '../../../../../base/Button/Button';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';

const ProspectList = ({ isOpen }) => {
  const prospects = [
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...'
  ];

  
  return (
    <div
      className={`flex flex-col transition-[max-height] duration-300 ease-in-out overflow-y-auto rounded-md ${
        isOpen ? 'max-h-32' : 'max-h-0'
      }`}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -40px inset'}}
    >
      <span className='p-1'>
      {prospects.map((prospect, index) => (
        <div className='text-xs' key={index}>
          {prospect}
        </div>
      ))}
      </span>
    </div>
  );
};

const DiscoveryList = ({ isOpen }) => {
  const discoveries = [
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...',
    'Executive Message for CEO...'
  ];
  return (
    <div
      className={`flex flex-col transition-[max-height] duration-300 ease-in-out overflow-y-auto rounded-md ${
        isOpen ? 'max-h-32' : 'max-h-0'
      }`}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -40px inset'}}
    >
      <span className='p-1'>
      {discoveries.map((discovery, index) => (
        <div className='text-xs' key={index}>
          {discovery}
        </div>
      ))}
      </span>
    </div>
  );

}

const Sidebar = () => {
  const [prospectsOpen, setProspectsOpen] = useState(false);
  const [discoveriesOpen, setDiscoveriesOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='h-screen overflow-y-auto w-[calc(100vw-85vw)] p-2 border-r flex flex-col gap-4 justify-start items-center'>
      <div className='flex gap-4 items-center justify-between mt-3'>
        <div className='flex gap-2 items-center'>
          <Icon name={'logo'} size='26' />
          <span className='text-black tracking-tight font-black'>
            salescopilots
          </span>
        </div>
        <Icon name={'menu'} size='16' />
      </div>
      <div>
        <form className='max-w-md mx-auto'>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <Icon name={'search'} size='14' />
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-1.5 border-2 focus:outline-none rounded-lg border-#E5E7EB text-xs ps-10 bg-white'
              placeholder='Search'
              required
            />
          </div>
        </form>
      </div>
      <div className='flex flex-col items-start justify-start min-w-full gap-2'>
        <NavItem className='mt-1' icon='homeBlack' selectedIcon='home' size='22' text='Home'/>
        <div className='flex flex-col gap-0 items-center justify-center min-w-full cursor-pointer hover:bg-[#F5F3FF]'>
          <div className='flex items-center justify-between gap-1 min-w-full'>
            <div className='flex items-center text-start justify-between gap-2 min-w-full p-2 rounded-lg'>
              <div className='flex items-center gap-1'>
                <Icon name='prospecting' size='20' />
                <span className='tracking-tight mb-2 text-sm font-medium'>
                  Prospecting
                </span>
                <span className='px-2 mb-1 bg-[#F3F4F6] rounded-full text-xs'>
                  120
                </span>
              </div>
              <Icon
                onClick={() => setProspectsOpen(!prospectsOpen)}
                name='chevrondDown'
                size='12'
                className={`transform transition-transform duration-300 ${
                  prospectsOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
          <ProspectList isOpen={prospectsOpen} />
        </div>
        <div className='flex flex-col gap-0 items-center justify-center min-w-full cursor-pointer hover:bg-[#F5F3FF]'>
          <div className='flex items-center justify-between gap-1 min-w-full'>
            <div className='flex items-center text-start justify-between gap-2 min-w-full p-2 rounded-lg'>
              <div className='flex items-center gap-1'>
                <Icon name='discovery' size='20' />
                <span className='tracking-tight text-sm font-medium'>
                  Discovery
                </span>
                <span className='px-2 bg-[#F3F4F6] rounded-full text-xs'>
                  120
                </span>
              </div>
              <Icon
                onClick={() => setDiscoveriesOpen(!discoveriesOpen)}
                name='chevrondDown'
                size='12'
                className={`transform transition-transform duration-300 ${
                  prospectsOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
          <DiscoveryList isOpen={discoveriesOpen} />
        </div>
      </div>
      <div className='min-w-full p-2'>
        <div className='flex flex-col items-center text-start justify-start gap-1 min-w-full rounded-lg'>
          <span className='tracking-tight text-[#737373] text-xs min-w-full font-medium'>
            Manage
          </span>
          <NavItem icon='myCompany' selectedIcon='myCompany' size='16' text='My company' />
          <NavItem icon = 'personas' size={16} text={'Personas'} />
          <NavItem icon= 'integrations' size='16' text={'Integrations'} />
        </div>
      </div>
      <div className='flex flex-col items-start justify-start min-w-full gap-2 p-2 mt-2'>
      <div className='flex min-w-full gap-1'>
        <Icon size='30' name='credits'/>
        <span className='font-bold text-lg'>250/250</span>
      </div>
       <span className='text-xs text-[#999999]'>Credits reset in 30 days</span>
       <Button className={'mt-2 min-w-full'} icon='currency' iconSize={16} size='small' innerText='Get More Credits' />
      </div>
      <div className='min-w-full p-2'>
        <div className='flex flex-col items-center text-start justify-start gap-1 min-w-full rounded-lg'>
          <NavItem icon='support' selectedIcon='support' size='16' text='Support' />
          <NavItem icon='settings' size= '16' text = 'Settings' />
        </div>
      </div>
      <div className='min-w-full flex gap-2 py-1 rounded-md items-center justify-center bg-[#F3F4F6]'>
          <img src={'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="logo" className='w-8 h-8 object-cover rounded-full'/>
          <div className='flex flex-col items-start'>
            <span className='text-[10px] font-bold'>
              John Smith
            </span>
            <span className='text-[10px]'>
                johnsmith@gmail...
            </span>
          </div>
          <Icon className={'cursor-pointer'} onClick={() => navigate('/')} name='logout' size='16'/>
      </div>
    </div>
  );
};

export default Sidebar;
