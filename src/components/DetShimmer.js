import React from "react";

function DetShimmer() {
  return (
    <div className="Details p-4 h-[80vh] flex justify-center items-center ">
      <div className="Info flex p-2 justify-between items-center gap-3 w-[100%]  h-[61vh] bg-gray-50  rounded">
        <div className="Image w-[330px] h-[300px] rounded-md border border-1 border-cyan-900  bg-center">
          <img src="" alt="Image" className="rounded" />
        </div>
        <div className="item-details">
          <h1 className="font-bold">{}</h1>
          <h3 className="font-bold"></h3>
          <p>{}</p>

          <h3 className="font-bold"></h3>
        </div>
      </div>
    </div>
  );
}

export default DetShimmer;
