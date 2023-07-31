import React, { useState, useRef, useEffect } from "react";

const CollapsibleText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if the content exceeds 4 lines
    const updateNeedsExpansion = () => {
      if (contentRef.current) {
        const { clientHeight, scrollHeight } = contentRef.current;
        setNeedsExpansion(scrollHeight > clientHeight);
      }
    };

    updateNeedsExpansion();

    // Add resize event listener to recalculate on window resize
    window.addEventListener("resize", updateNeedsExpansion);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateNeedsExpansion);
    };
  }, []);

  const toggleText = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`overflow-hidden ${isExpanded ? "" : "line-clamp-4"}`}
        ref={contentRef}
      >
        {text}
      </div>
      {needsExpansion && (
        <button
          className="text-blue-500 underline mt-2 block"
          onClick={toggleText}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default CollapsibleText;
