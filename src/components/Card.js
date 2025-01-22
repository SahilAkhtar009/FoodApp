import React from "react";

function Card({ recipe }) {
  // console.log(recipe);
  return (
    <div className="Card w-[220px] h-[300px] bg-gray-100 p-2 border border-1 border-cyan-900 rounded hover:bg-gray-200">
      <div className="FoodImg w-[200px]">
        <img src={recipe.image} alt="Food" className="w-[200px]" />
      </div>
      <h2 className="font-bold mt-2">{recipe.name}</h2>
      <h3>
        Price ₹ {recipe.caloriesPerServing}
        <span className="rating p-2 text-gray-500">Rating {recipe.rating}</span>
      </h3>
    </div>
  );
}
// Higher order components
export const CardSapecial = (Card) => {
  return ({ recipe }) => {
    return (
      <div className="relative">
        <h1 className="absolute bg-black text-white px-2 py-1 rounded top-1 left-1">
          Promoted
        </h1>
        <Card recipe={recipe} />
      </div>
    );
  };
};
export default Card;
