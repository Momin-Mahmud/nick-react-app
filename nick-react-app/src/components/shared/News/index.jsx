import React from "react";
import NewsCard from "../../../components/base/NewsCard/NewsCard";
import News1 from '../../../assets/News/News1.png'
import News2 from '../../../assets/News/News2.png'
import News3 from '../../../assets/News/News3.png'


const News = () => {
  return (
    <div className="p-24 flex flex-col gap-32">
      <NewsCard
        title="Build Pipeline and Generate B2B Leads Without Wasting Time"
        description="Our AI Co-Pilot is your ultimate sidekick, designed to personalize your messages at scale and perform prospecting for you. Imagine the power of doubling your pipeline and securing twice as many C-Level meetings in half the time!"
        imageSrc={News1}
        imageOnLeft={true}
        badgeText={"Prospecting"}
        badgeIcon={"prospecting"}
      />
      <NewsCard
        title="Increase Your Win-Rate and Close Bigger Deals Without Long Sales Cycles"
        description="Step into every sales call fully prepared and confident. The Discovery AI Co-Pilot transforms your team into top performers, uncovering critical business issues and ensuring value selling at every interaction. This revolutionary tool is designed for the elite – turning every rep into the top 1%."
        imageSrc={News2}
        imageOnLeft={false}
        badgeText={"Discovery"}
        badgeIcon={"thunderBolt"}
      />
      {/* <NewsCard
        title="A catchy heading that brings some interest to visitors"
        description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean. Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        imageSrc={News3}
        imageOnLeft={true}
      /> */}
    </div>
  );
};

export default News;
