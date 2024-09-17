import { useState } from "react";
import Icon from "../../../utils/Icon";

const FileUploader = ({ label = "Upload Sales Docs" }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const allowedExtensions = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    // Filter files based on allowed types
    const validFiles = selectedFiles.filter((file) =>
      allowedExtensions.includes(file.type)
    );
    const invalidFiles = selectedFiles.filter(
      (file) => !allowedExtensions.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      alert(
        "Some files have invalid types. Please upload only PDF, DOC, or PPTX files."
      );
    }

    if (validFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="w-full h-auto p-5 bg-white border border-neutral-200 rounded-lg">
      {/* Content Container */}
      <div className="flex flex-col gap-6">
        {/* Title and Subtext */}
        <div className="flex flex-col w-full justify-start items-start">
          {/* Title */}
          <div className="text-fuchsia-700 text-lg font-semibold">{label}</div>
          {/* Subtext */}
          <div className="text-neutral-500 text-sm">
            PDF, DOC, PPTX up to 1GB each
          </div>
        </div>

        {/* Uploaded File Information */}
        {files.length > 0 && (
          <div className="flex flex-col gap-2 text-neutral-600 text-sm bg-neutral-50 p-2 rounded-lg border border-neutral-300">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>
                  <strong>Uploaded File:</strong> {file.name}
                </span>
                <button
                  className="ml-2 text-neutral-500 hover:text-[#C026D3] focus:outline-none"
                  onClick={() => handleRemoveFile(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        <div className="flex justify-start mt-2">
          <label
            htmlFor="file-upload"
            className="flex items-center gap-2 px-4 py-2 bg-fuchsia-700 text-white border border-fuchsia-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:ring-offset-2 cursor-pointer"
          >
            {/* Icon (Left) */}
            <div className="w-5 h-5">
              <Icon name="uploadFile" size="15" />
            </div>
            {/* Label */}
            <span className="text-sm font-medium">Browse Files</span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
