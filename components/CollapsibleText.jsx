import React, { useState, useRef } from "react";

const CollapsibleText = ({ text, collapsedHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleText = () => {
    setIsExpanded((prevState) => !prevState);
    console.log(collapsedHeight);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`overflow-hidden transition-max-height ${
          isExpanded ? "max-h-full" : `max-h-[110px]`
        }`}
        ref={contentRef}
      >
        {text}
      </div>
      {!isExpanded && (
        <button
          className="text-blue-500 underline mt-2 block"
          onClick={toggleText}
        >
          Show More
        </button>
      )}
      {isExpanded && (
        <button
          className="text-blue-500 underline mt-2 block"
          onClick={toggleText}
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default CollapsibleText;
