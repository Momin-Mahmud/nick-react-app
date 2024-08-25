import React from "react";
import NewsCard from "../../../components/base/NewsCard/NewsCard";
import News1 from '../../../assets/News/News1.png'
import News2 from '../../../assets/News/News2.png'
import News3 from '../../../assets/News/News3.png'


const News = () => {
  return (
    <div className="p-24">
      <NewsCard
        title="A catchy heading that brings some interest to visitors"
        description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean. Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        imageSrc={News1}
        imageOnLeft={true}
      />
      <NewsCard
        title="A catchy heading that brings some interest to visitors"
        description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean. Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        imageSrc={News2}
        imageOnLeft={false}
      />
      <NewsCard
        title="A catchy heading that brings some interest to visitors"
        description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean. Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        imageSrc={News3}
        imageOnLeft={true}
      />
    </div>
  );
};

export default News;
