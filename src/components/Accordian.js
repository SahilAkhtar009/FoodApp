import React, { useState } from "react";
import AccordianItems from "./AccordianItems";

function Accordian() {
  const [Showitem, setShowitem] = useState(false);
  const handleClick = () => {
    setShowitem(!Showitem);
  };
  return (
    <div className=" mt-3 ">
      <h1
        className="p-2  mb-5 text-center font-bold cursor-pointer shadow shadow-zinc-900"
        onClick={handleClick}
      >
        Heading {Showitem ? "🠉" : "🠋"}
      </h1>
      {Showitem && <AccordianItems />}
    </div>
  );
}

export default Accordian;
