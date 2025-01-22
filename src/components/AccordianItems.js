import React from "react";

function AccordianItems() {
  return (
    <div className="container flex flex-col  border-b-4">
      <div className={`accordion flex p-3`}>
        <div className="details w-[90%]">
          <h2 className="font-bold"> ingredients :</h2>
          <p>
            Ground beef,Potatoes, peeled and diced,Onions, finely
            chopped,Tomatoes, chopped,Ginger-garlic paste,Cumin powder,Coriander
            powder,Turmeric powder,Red chili powder,Cooking oil,Fresh coriander
            leaves,Salt to taste
          </p>
          <h1 className="font-bold">Instructions :</h1>
          <li>
            In a pan, heat cooking oil and sauté chopped onions until golden
            brown.
          </li>
          <li>Add ginger-garlic paste and sauté until fragrant.</li>
          <li>
            Add ground beef and cook until browned. Drain excess oil if needed.
          </li>
          <li>Add diced potatoes, chopped tomatoes, and spices. Mix well.</li>
          <li>
            Cover and simmer until the potatoes are tender and the masala is
            well-cooked.
          </li>
        </div>
        <div className="img  border-2 border-black h-[110px] flex p-2">
          <img
            src="https://cdn.dummyjson.com/recipe-images/13.webp"
            className="w-[100px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AccordianItems;
