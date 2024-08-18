import React from "react";
import Icon from "../../../utils/Icon";

const Badge = ({ text, type, iconName = "arrow", iconSize = 16, textSize = 12 }) => {
  // Function to map 'type' to specific colors
  const getBackgroundColor = () => {
    switch (type) {
      case "primary":
        return "bg-[#EEF2FF]";
      case "success":
        return "bg-[#4CAF50]"; // Custom color for success
      case "warning":
        return "bg-[#FF9800]"; // Custom color for warning
      case "info":
        return "bg-[#2196F3]"; // Custom color for info
      case "error":
        return "bg-[#F44336]"; // Custom color for error
      default:
        return "bg-[#607D8B]"; // Default custom color (e.g., grey)
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "primary":
        return "text-[#6366F1]";
      case "success":
        return "text-[#4CAF50]"; // Custom color for success
      case "warning":
        return "text-[#FF9800]"; // Custom color for warning
      case "info":
        return "text-[#2196F3]"; // Custom color for info
      case "error":
        return "text-[#F44336]"; // Custom color for error
      default:
        return "text-[#607D8B]"; // Default custom color (e.g., grey)
    }
  };

  // Function to convert numeric textSize to Tailwind text size class
  const getTextSizeClass = (size) => {
    if (size <= 12) return "text-xs"; // Small text size
    if (size <= 14) return "text-sm"; // Small-medium text size
    if (size <= 16) return "text-base"; // Base text size
    if (size <= 20) return "text-lg"; // Large text size
    if (size <= 24) return "text-xl"; // Extra-large text size
    if (size <= 30) return "text-2xl"; // 2x extra-large text size
    return "text-3xl"; // Default to 3x extra-large if too large
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full ${getBackgroundColor()} ${getTextColor()} ${getTextSizeClass(textSize)}`}
    >
      <Icon name={iconName} className="mr-2" size={iconSize} />
      {text}
    </span>
  );
};

export default Badge;
