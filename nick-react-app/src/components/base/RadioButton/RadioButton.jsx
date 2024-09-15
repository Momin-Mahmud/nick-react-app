import React, { useState } from 'react';

const RadioButton = ({ label, labelEditable }) => {
  const [selected, setSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableLabel, setEditableLabel] = useState(label);

  const handleLabelClick = (e) => {
    if (labelEditable) {
      e.stopPropagation(); // Stop the event from bubbling up to the parent div
      setIsEditing(true);
    }
  };

  const handleLabelChange = (e) => {
    setEditableLabel(e.target.value);
  };

  const handleLabelBlur = () => {
    if (!editableLabel) {
      setEditableLabel(label); // Reset to the original label if input is empty
    }
    setIsEditing(false);
  };

  return (
    <div
      className="relative flex items-center gap-3 w-[251px] h-[40px] p-3 bg-white border border-neutral-200 shadow-sm rounded-lg cursor-pointer"
      onClick={() => !isEditing && setSelected(!selected)}
    >
      {/* Left Content (Radio Button Circle) */}
      <div className="relative flex items-center justify-center w-5 h-5 border-2 rounded-full border-[#D1D5DB]">
        {/* Outer Circle */}
        <input
          type="radio"
          checked={selected}
          onChange={() => setSelected(!selected)}
          className="appearance-none absolute w-full h-full cursor-pointer"
        />
        {/* Inner Circle (visible when selected) */}
        {selected && <div className="absolute inset-0 m-auto w-[50%] h-[50%] bg-fuchsia-700 rounded-full"></div>}
      </div>

      {/* Label/Placeholder */}
      {isEditing ? (
        <input
          className="text-sm font-medium text-neutral-700 border-none bg-transparent focus:outline-none caret-fuchsia-700"
          value={editableLabel ?? ''}
          onChange={handleLabelChange}
          onBlur={handleLabelBlur}
          onClick={(e) => e.stopPropagation()} // Prevent the input from toggling the radio button
          autoFocus
          placeholder="Please Specify"
        />
      ) : (
        <span
          className={`text-sm font-medium text-neutral-${selected ? 700 : 500}`}
          onClick={handleLabelClick}
        >
          {editableLabel ?? label}
        </span>
      )}
    </div>
  );
};

export default RadioButton;
