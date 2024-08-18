import React from "react";
import NewsCard from "../../../components/base/NewsCard/NewsCard";

const News = () => {
  return (
    <div className="p-24">
      <NewsCard
        title="A catchy heading that brings some interest to visitors"
        description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean. Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        imageSrc="https://via.placeholder.com/150"
        imageOnLeft={true}
      />
      <NewsCard
        title="A catchy heading that brings some interest to visitors"
        description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean. Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        imageSrc="https://via.placeholder.com/150"
        imageOnLeft={false}
      />
      <NewsCard
        title="A catchy heading that brings some interest to visitors"
        description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean. Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        imageSrc="https://via.placeholder.com/150"
        imageOnLeft={true}
      />
    </div>
  );
};

export default News;
