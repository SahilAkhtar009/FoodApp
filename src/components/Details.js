import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetShimmer from "./DetShimmer";
import useRecipe from "../Utils/useRecipe";

function Details() {
  const { id } = useParams();
  const Recipe = useRecipe(id);

  return Recipe == null ? (
    <DetShimmer />
  ) : (
    <div className="Details p-4 h-[80vh] flex justify-center items-center mt-4 ">
      <div className="Info flex p-2 justify-between gap-3">
        <div className="Image w-1/2 p-2   bg-center flex justify-center items-center ">
          <img src={Recipe.image} alt="Image" className="rounded w-[80%]" />
        </div>
        <div className="item-details flex flex-col">
          <h1 className="font-bold mt-3">{Recipe.name}</h1>
          <h3 className="font-bold mt-3">ingredients :</h3>
          <p>{Recipe.ingredients.join(",")}</p>

          <h3 className="font-bold mt-3">Instructions :</h3>
          <ul className="list-disc px-4">
            {Recipe.instructions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
