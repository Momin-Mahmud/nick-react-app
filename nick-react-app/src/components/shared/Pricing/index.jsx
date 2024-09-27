import React from "react";
import PricingCard from "../../base/PricingCard/PricingCard";

const PricingCardsList = () => {
  const data = [
    {
      title: "Free",
      isBadge: false,
      badgeIcon: "",
      badgeText: "",
      price: "0",
      tokens: "2.5k",
      words: "2.5k",
      features: [
        "Prospecting Research",
        "Commonality Finder",
        "LinkedIn Profile Research",
        "Trigger Identifier",
        "25 Messaging Creation",
        "2GB of database storage ",
      ],
      isFree: true,
    },
    {
      title: "Basic",
      isBadge: true,
      badgeIcon: "fire",
      badgeText: "Best Value",
      price: "37",
      tokens: "5k",
      packageId: 1,
      words: "50k",
      features: [
        "Prospecting Research",
        "Commonality Finder",
        "LinkedIn Profile Research",
        "Trigger Identifier",
        "150 Messaging Creation",
        "5GB of database storage ",
        "Prospect Priority Identifier",
        "Account Plan Creation",
        "One Click Sequences",
        "Intent Signal Identifier",
      ],
      isFree: false,
    },
    {
      title: "Team",
      isBadge: false,
      badgeIcon: "",
      badgeText: "",
      price: "97",
      packageId: 2,
      tokens: "10k",
      words: "100k",
      features: [
        "Prospecting Research",
        "Commonality Finder",
        "LinkedIn Profile Research",
        "Trigger Identifier",
        "400 Messaging Creation",
        "10GB of database storage ",
        "Prospect Priority Identifier",
        "Account Plan Creation",
        "One Click Sequences",
        "Intent Signal Identifier",
        "Discovery Question Builder (Coming Soon)",
        "Trap Question Creation (Coming Soon)",
        "Discovery Post Call Coaching (Coming Soon)",
      ],
      isFree: false,
    },
    {
      title: "Organization",
      isBadge: true,
      badgeIcon: "trophy",
      packageId: 3,
      badgeText: "Top Tier",
      price: "149",
      tokens: "20k",
      words: "200k",
      features: [
        "Prospecting Research",
        "Commonality Finder",
        "LinkedIn Profile Research",
        "Trigger Identifier",
        "1500 Messaging Creation",
        "20GB of database storage ",
        "Prospect Priority Identifier",
        "Account Plan Creation",
        "One Click Sequences",
        "Intent Signal Identifier",
        "Discovery Question Builder (Coming Soon)",
        "Trap Question Creation (Coming Soon)",
        "Discovery Post Call Coaching (Coming Soon)",
      ],
      isFree: false,
    },
  ];

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start gap-4">
        <h1 className="text-[##111827] text-3xl font-extrabold">
          Pricing designed for scale
        </h1>
        <p className="text-[#6B7280]">
          Just straight-forward pricing that aligns with your business goals.
        </p>
        <div className="flex gap-1 rounded-md bg-[#FFF] p-1">
          <button className="flex items-center rounded-lg bg-[#F9FAFB] py-2 px-6 text-sm font-medium">
            Pay yearly
            <svg
              width="52"
              height="24"
              viewBox="0 0 52 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <rect width="52" height="24" rx="12" fill="#F0FDF4" />
              <path
                d="M13.855 11.2628V12.5554H9.34082V11.2628H13.855ZM15.4062 17V15.8864L18.8515 12.3168C19.2194 11.929 19.5226 11.5893 19.7613 11.2976C20.0032 11.0026 20.1839 10.7225 20.3032 10.4574C20.4225 10.1922 20.4822 9.91051 20.4822 9.61222C20.4822 9.27415 20.4026 8.98248 20.2435 8.73722C20.0844 8.48864 19.8673 8.29806 19.5922 8.16548C19.3171 8.02959 19.0073 7.96165 18.6626 7.96165C18.298 7.96165 17.9798 8.03622 17.708 8.18537C17.4362 8.33452 17.2274 8.54498 17.0816 8.81676C16.9358 9.08854 16.8628 9.40672 16.8628 9.77131H15.3962C15.3962 9.15151 15.5387 8.60961 15.8238 8.1456C16.1088 7.68158 16.4999 7.32197 16.9971 7.06676C17.4942 6.80824 18.0593 6.67898 18.6924 6.67898C19.3321 6.67898 19.8955 6.80658 20.3827 7.06179C20.8733 7.31368 21.2561 7.65838 21.5312 8.09588C21.8063 8.53007 21.9438 9.0206 21.9438 9.56747C21.9438 9.94531 21.8725 10.3149 21.73 10.6761C21.5908 11.0374 21.3472 11.4401 20.9992 11.8842C20.6512 12.325 20.1673 12.8603 19.5475 13.4901L17.5241 15.608V15.6825H22.1079V17H15.4062ZM27.5368 17.169C26.7513 17.1657 26.0802 16.9586 25.5233 16.5476C24.9665 16.1366 24.5406 15.5384 24.2456 14.7528C23.9507 13.9673 23.8032 13.0211 23.8032 11.9141C23.8032 10.8104 23.9507 9.86742 24.2456 9.08523C24.5439 8.30303 24.9715 7.70644 25.5283 7.29545C26.0885 6.88447 26.758 6.67898 27.5368 6.67898C28.3157 6.67898 28.9836 6.88613 29.5404 7.30043C30.0972 7.71141 30.5231 8.308 30.8181 9.0902C31.1164 9.86908 31.2655 10.8104 31.2655 11.9141C31.2655 13.0244 31.118 13.9723 30.8231 14.7578C30.5281 15.54 30.1022 16.1383 29.5454 16.5526C28.9885 16.9635 28.319 17.169 27.5368 17.169ZM27.5368 15.8416C28.2262 15.8416 28.7648 15.5052 29.1526 14.8324C29.5437 14.1596 29.7393 13.1868 29.7393 11.9141C29.7393 11.0689 29.6498 10.3546 29.4708 9.77131C29.2951 9.18466 29.0416 8.74053 28.7101 8.43892C28.382 8.134 27.9909 7.98153 27.5368 7.98153C26.8508 7.98153 26.3122 8.3196 25.9211 8.99574C25.53 9.67187 25.3328 10.6446 25.3295 11.9141C25.3295 12.7625 25.4173 13.4801 25.593 14.0668C25.7719 14.6501 26.0255 15.0926 26.3536 15.3942C26.6817 15.6925 27.0761 15.8416 27.5368 15.8416ZM38.3438 15.0909V14.554C38.3438 14.1695 38.4234 13.8182 38.5825 13.5C38.7449 13.1785 38.9802 12.9216 39.2884 12.7294C39.6 12.5339 39.9762 12.4361 40.417 12.4361C40.8678 12.4361 41.2456 12.5322 41.5505 12.7244C41.8554 12.9167 42.0858 13.1735 42.2416 13.495C42.4007 13.8165 42.4802 14.1695 42.4802 14.554V15.0909C42.4802 15.4754 42.4007 15.8284 42.2416 16.1499C42.0825 16.468 41.8488 16.7249 41.5406 16.9205C41.2356 17.1127 40.8611 17.2088 40.417 17.2088C39.9695 17.2088 39.5917 17.1127 39.2835 16.9205C38.9752 16.7249 38.7416 16.468 38.5825 16.1499C38.4234 15.8284 38.3438 15.4754 38.3438 15.0909ZM39.5022 14.554V15.0909C39.5022 15.3759 39.5702 15.6345 39.7061 15.8665C39.8419 16.0985 40.0789 16.2145 40.417 16.2145C40.7517 16.2145 40.9854 16.0985 41.118 15.8665C41.2506 15.6345 41.3169 15.3759 41.3169 15.0909V14.554C41.3169 14.2689 41.2522 14.0104 41.123 13.7784C40.997 13.5464 40.7617 13.4304 40.417 13.4304C40.0856 13.4304 39.8502 13.5464 39.711 13.7784C39.5718 14.0104 39.5022 14.2689 39.5022 14.554ZM33.2231 9.2642V8.72727C33.2231 8.3428 33.3026 7.98982 33.4617 7.66832C33.6241 7.34683 33.8595 7.08996 34.1677 6.89773C34.4793 6.70549 34.8554 6.60938 35.2963 6.60938C35.747 6.60938 36.1249 6.70549 36.4298 6.89773C36.7347 7.08996 36.9651 7.34683 37.1208 7.66832C37.2766 7.98982 37.3545 8.3428 37.3545 8.72727V9.2642C37.3545 9.64867 37.2749 10.0017 37.1159 10.3232C36.9601 10.6413 36.7281 10.8982 36.4198 11.0938C36.1149 11.286 35.7404 11.3821 35.2963 11.3821C34.8455 11.3821 34.466 11.286 34.1578 11.0938C33.8528 10.8982 33.6208 10.6413 33.4617 10.3232C33.3026 10.0017 33.2231 9.64867 33.2231 9.2642ZM34.3865 8.72727V9.2642C34.3865 9.54924 34.4527 9.80776 34.5853 10.0398C34.7212 10.2718 34.9582 10.3878 35.2963 10.3878C35.6277 10.3878 35.8597 10.2718 35.9923 10.0398C36.1282 9.80776 36.1961 9.54924 36.1961 9.2642V8.72727C36.1961 8.44223 36.1315 8.18371 36.0022 7.9517C35.873 7.7197 35.6376 7.60369 35.2963 7.60369C34.9648 7.60369 34.7295 7.7197 34.5903 7.9517C34.4544 8.18371 34.3865 8.44223 34.3865 8.72727ZM33.6954 17L40.6954 6.81818H41.8836L34.8836 17H33.6954Z"
                fill="#22C55E"
              />
            </svg>
          </button>
          <button className="rounded-lg text-[#86198F] bg-[#FFF] py-2 px-6 text-sm font-medium box-shadow-btn">
            Pay monthly
          </button>
        </div>
      </div>

      <div className="flex p-24 justify-between">
        {data.map((item, index) => (
          <PricingCard key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default PricingCardsList;
