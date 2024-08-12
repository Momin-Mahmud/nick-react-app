import Button from '../../../components/base/Button/Button';

const Hero = () => {
  return (
    <div className='flex items-start w-full p-24'>
      <div className='text-start max-w-[50%] grid gap-3.5'>
      <div className='text-[#710BA3] font-bold'>
        AI Co-pilots trained by the best sales leaders
      </div>
      <div className='font-extrabold text-6xl'>
        10x Your Pipeline + Close Bigger Deals
      </div>
      <div className='text-[#374151]'>
        Craft tailored messages for executives. Ask key questions to identify
        business challenges and create urgency for adopting your product or
        service.
      </div>
      <div>
        <Button size='large' type='primaryDark' innerText='Get 7 Day Free Trial' />
      </div>
      </div>

    </div>
  );
};

export default Hero;
