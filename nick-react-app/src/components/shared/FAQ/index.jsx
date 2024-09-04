import React from "react";
import SearchInput from "../../../components/base/SearchInput/SearchInput";
import FAQCard from "../../../components/base/FAQCard/FAQCard";
import Button from "../../base/Button/Button";
import Group1 from "../../../assets/hero/Group18.png";

const Faq = () => {
  const data = [
    {
      icon: "thunderBolt",
      heading: "Account & payments",
      body: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    },
    {
      icon: "thunderBolt",
      heading: "Privacy policy",
      body: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    },
    {
      icon: "thunderBolt",
      heading: "Cancellation policy",
      body: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    },
    {
      icon: "thunderBolt",
      heading: "How to reset my password?",
      body: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    },
    {
      icon: "thunderBolt",
      heading: "Do you offer refunds?",
      body: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    },

    {
      icon: "thunderBolt",
      heading: "Terms and conditions",
      body: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
    },
  ];
  return (
    <div>
      <img
        src={Group1}
        className="w-full h-auto object-contain"
        alt="Description of the image"
        style={{ imageRendering: "auto" }}
      />

      {/* <div
        className='flex flex-col items-center justify-center text-white h-[264px]'
        style={{
          background: 'linear-gradient(135deg, #FC00FF 0%, #00B6DE 100%)'
        }}
      >
        <div className='mb-4 text-2xl font-bold'>How we can help you?</div>
        <div className='w-full max-w-[800px]'>
          <SearchInput />
        </div>
      </div> */}

      {/* <div className='flex flex-wrap gap-32 bg-[#FFFFF] items-center justify-center min-w-full py-20    '>
        {data.map((item, index) => (
          <FAQCard
            key={index}
            heading={item.heading}
            icon={item.icon}
            body={item.body}
          />
        ))}
      </div> */}

      {/* <div className=' mb-20 w-[100%] flex items-center justify-center'>
        <div className='border-b-2 border-gray-300 min-w-[90%]'></div>
      </div> */}

      <div className="px-20">
        {/* <div className='flex justify-between items-center bg-white p-8 rounded-md'>
          <div className='text-start'>
            <div className='text-2xl font-bold'>Still Have Questions?</div>
            <div className='text-[#6B7280]'>
              Still have question in mind? Please get in touch with our support
              team or write us an email.
            </div>
          </div>
          <span>
            <Button innerText='Tertiary Action' type='outlined' />
          </span>
        </div> */}
        <div className="flex justify-between items-center bg-white p-8 rounded-md w-full mt-10">
          <div className="text-center flex flex-col justify-center items-center w-full gap-2">
            <div className="text-sm font-bold text-[#A21CAF]">
              Like what you see?
            </div>
            <div className=" font-black text-2xl">Let’s work together</div>
            <div>
              If you’re looking for a kick-ass product design agency, we’re here
              to help!
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Button type="primary" innerText="Primary Action" />
              <Button type="outlined" innerText="Secondary Action" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
