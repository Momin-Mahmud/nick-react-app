import Icon from "../../../../../../utils/Icon";

const Footer = () => {
  return (
    <div className="p-24">
      <hr className="mb-8"/>
      <div className="flex justify-between">
        <span>© 2024 Designership. All rights reserved.</span>
        <span className="flex">
          <Icon name="facebook"  size={20} />
          <Icon name="twitter"className={"mx-5"} size={20} />
          <Icon name="instagram" size={20} />
          <Icon name="linkedin" className={"ml-5"} size={20} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
