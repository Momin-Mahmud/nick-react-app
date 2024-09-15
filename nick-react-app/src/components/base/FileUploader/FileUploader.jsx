import { useState } from 'react';
import Icon from '../../../utils/Icon';

const FileUploader = ({label = 'Upload Sales Docs'}) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleRemoveFile = () => {
    setFileName('');
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
          <div className="text-neutral-500 text-sm">PDF, Doc, pptx up to 1GB</div>
        </div>

        {/* Uploaded File Information */}
        {fileName && (
          <div className="flex items-center justify-between text-neutral-600 text-sm bg-neutral-50 p-2 rounded-lg border border-neutral-300">
            <span><strong>Uploaded File:</strong> {fileName}</span>
            <button
              className="ml-2 text-neutral-500 hover:text-[#C026D3] focus:outline-none"
              onClick={handleRemoveFile}
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
        )}

        {/* Button */}
        <div className="flex justify-start mt-2">
          <label
            htmlFor="file-upload"
            className="flex items-center gap-2 px-4 py-2 bg-fuchsia-700 text-white border border-fuchsia-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:ring-offset-2 cursor-pointer"
          >
            {/* Icon (Left) */}
            <div className="w-5 h-5">
              <Icon name='uploadFile' size='15' />
            </div>
            {/* Label */}
            <span className="text-sm font-medium">Browse Files</span>
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
