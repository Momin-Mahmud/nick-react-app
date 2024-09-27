import Badge from "../Badge/Badge";
import { StartedSvg } from "../../../utils/Svg";
import { BuySvg } from "../../../utils/Svg";
import apiRequest from "../../../utils/axios/api-request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PricingCard = (data) => {
  const cardData = data?.data;

  const initiatePayment = async (packageId) => {
  
    const { data, error } =  await apiRequest("post", `payment/checkout_session`, {
      params: {
        id: packageId,
      },
    });
    if (!error) {
      window.location.href = data;
    }
  }

  return (
    <div className="flex items-start justify-start text-start w-[20vw]">
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <div className="flex justify-between">
          <h3 className="text-purple-600 font-medium text-[#86198F] text-base">
            {cardData.title}
          </h3>
          {cardData.isBadge && (
            <Badge
              text={cardData.badgeText}
              type="custom"
              iconName={cardData.badgeIcon}
              textSize={14}
              fontWeight={"medium"}
            />
          )}
        </div>
        <div className="flex flex-row items-baseline">
          <p className="text-4xl font-bold text-[#111827] mt-3 mb-3">
            ${cardData.price}
          </p>
          <p className="font-medium text-[#9CA3AF] ml-1">user / month</p>
        </div>
        <p className="text-sm text-gray-500 mt-1 text-[#6B7280]">
          AI-Assisted Message Writing <br /> ({cardData.words} words monthly
          limit)
        </p>

        <ul className="mt-6 space-y-4 border-t border-gray-200 pt-6">
          {cardData.features.map((feature) => {
            // Check if the feature includes "Messaging Creation" or "database storage"
            if (
              feature.includes("Messaging Creation") ||
              feature.includes("of database storage")
            ) {
              // Split the feature to isolate the number part
              const [numberPart, ...textPart] = feature.split(" ");

              return (
                <li className="flex items-start" key={feature}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36078 16.6392 3.59998 12 3.59998C7.36078 3.59998 3.59998 7.36078 3.59998 12C3.59998 16.6392 7.36078 20.4 12 20.4ZM15.8924 10.6424C16.3025 10.2324 16.3025 9.56756 15.8924 9.15751C15.4824 8.74746 14.8176 8.74746 14.4075 9.15751L10.95 12.6151L9.59244 11.2575C9.18239 10.8475 8.51756 10.8475 8.10751 11.2575C7.69746 11.6676 7.69746 12.3324 8.10751 12.7424L10.2075 14.8424C10.6176 15.2525 11.2824 15.2525 11.6924 14.8424L15.8924 10.6424Z"
                      fill="#22C55E"
                    />
                  </svg>
                  <p className="font-normal ml-1 text-[#374151] text-base">
                    <span className="font-bold">
                      {numberPart} {/* The number part */}
                    </span>{" "}
                    {textPart.join(" ")} {/* The remaining text */}
                  </p>
                </li>
              );
            }

            return (
              <li className="flex items-start" key={feature}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36078 16.6392 3.59998 12 3.59998C7.36078 3.59998 3.59998 7.36078 3.59998 12C3.59998 16.6392 7.36078 20.4 12 20.4ZM15.8924 10.6424C16.3025 10.2324 16.3025 9.56756 15.8924 9.15751C15.4824 8.74746 14.8176 8.74746 14.4075 9.15751L10.95 12.6151L9.59244 11.2575C9.18239 10.8475 8.51756 10.8475 8.10751 11.2575C7.69746 11.6676 7.69746 12.3324 8.10751 12.7424L10.2075 14.8424C10.6176 15.2525 11.2824 15.2525 11.6924 14.8424L15.8924 10.6424Z"
                    fill="#22C55E"
                  />
                </svg>
                <p className="font-normal ml-1 text-[#374151] text-base">
                  {feature}
                </p>
              </li>
            );
          })}
        </ul>

        <button onClick={() => initiatePayment(cardData.packageId)} className="mt-5">
          {cardData.isFree ? StartedSvg : BuySvg}
        </button>

        {/* <button className="mt-6 w-full py-2 px-4 bg-[#FDF4FF] text-[#6366F1] text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75">
          {cardData.buttonText}
        </button> */}
      </div>
    </div>
  );
};

export default PricingCard;
