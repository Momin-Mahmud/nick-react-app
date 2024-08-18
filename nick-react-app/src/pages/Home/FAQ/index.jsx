import React from "react";
import SearchInput from "../../../components/base/SearchInput/SearchInput";
import FAQCard from "../../../components/base/FAQCard/FAQCard";

const FAQ = () => {


    const data = [
        {
            icon:'thunderBolt',
            heading:"Account & payments",
            body:"Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        },
        {
            icon:'thunderBolt',
            heading:"Privacy policy",
            body:"Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        },
        {
            icon:'thunderBolt',
            heading:"Cancellation policy",
            body:"Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        },
        {
            icon:'thunderBolt',
            heading:"How to reset my password?",
            body:"Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        },
        {
            icon:'thunderBolt',
            heading:"Do you offer refunds?",
            body:"Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        },


        {
            icon:'thunderBolt',
            heading:"Terms and conditions",
            body:"Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        },

    ]
  return (
    <div>
      {/* Header Section */}
      <div
        className="flex flex-col items-center justify-center text-white h-[264px] mb-16"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20 bg=[#F9FAFB]">
        {data.map((item, index) => (
          <FAQCard heading={item.heading} icon={item.icon} body={item.body}/>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
