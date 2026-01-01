import React, { useState, useEffect, useRef } from "react";
import candidates from "../Json Data/Latest_candidates.json";

function Cadidte_slider() {
  const total = candidates.length;
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4); // default desktop

  const sliderRef = useRef(null);
  const dragStartX = useRef(0);
  const dragEndX = useRef(0);


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1); // mobile
      else if (width < 1024) setItemsPerPage(2); // tablet
      else setItemsPerPage(4); // desktop
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, itemsPerPage, total]);

  // Pause slider for 5 seconds when image is clicked
  const handleClick = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Mouse drag for swipe
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    dragEndX.current = e.clientX;
    const diff = dragEndX.current - dragStartX.current;

    if (diff > 50) {
      // Swiped right → prev
      setStartIndex((prevIndex) => (prevIndex - itemsPerPage + total) % total);
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000);
    } else if (diff < -50) {
      // Swiped left → next
      setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % total);
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000);
    }
  };

  // Get visible candidates
  const visibleCandidates = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleCandidates.push(candidates[(startIndex + i) % total]);
  }

  return (
    <div className="py-10 px-6 bg-gray-100">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-6">Latest Candidates</h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="grid gap-6 cursor-grab"
        style={{
          gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {visibleCandidates.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300"
            onClick={handleClick}
          >
            <img
              src={item.image}
              alt={item.firstName}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="font-semibold">
              {item.firstName} {item.lastName}
            </h3>
            <p className="text-sm text-gray-500">{item.profile}</p>
            <p className="text-xs text-gray-400">{item.education}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cadidte_slider;
