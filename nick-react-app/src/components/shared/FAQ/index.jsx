import React from "react";
import SearchInput from "../../../components/base/SearchInput/SearchInput";
import FAQCard from "../../../components/base/FAQCard/FAQCard";
import Button from "../../base/Button/Button";

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
      {/* Header Section */}
      <div
        className="flex flex-col items-center justify-center text-white h-[264px]"
        style={{
          background: "linear-gradient(135deg, #FC00FF 0%, #00B6DE 100%)",
        }}
      >
        <div className="mb-4 text-2xl font-bold">How we can help you?</div>
        <div className="w-full max-w-[800px]">
          <SearchInput />
        </div>
      </div>

      {/* FAQ Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20 bg-[#FFFFF] py-20 ">
        {data.map((item, index) => (
          <FAQCard
            key={index}
            heading={item.heading}
            icon={item.icon}
            body={item.body}
          />
        ))}
      </div>

      <div className="border-b-2 border-gray-300 mb-20 px-20">

      </div>

      <div className="px-20">
        <div className="flex justify-between items-center bg-white p-6">
          <div>
            <div>Still Have Questions?</div>
            <div>
              Still have question in mind? Please get in touch with our support
              team or write us an email.
            </div>
          </div>
          <span>
            <Button innerText="Tertiary Action" type="secondary" />
          </span>
        </div>

        <div className="text-center">
          <div>
            LIKE WHAT YOU SEE?
          </div>

          <div>
          Let’s work together
          </div>
          If you’re looking for a kick-ass product design agency, we’re here to help!
          <div>
            <Button type="primary" innerText="Primary Action"/>
            <Button type="secondary" innerText="Secondary Action"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Faq;
