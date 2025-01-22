import React, { useContext, useEffect, useState } from "react";
import Card, { CardSapecial } from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext.js";

function Cards() {
  const [recipes, setRecipes] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [SearchData, setSearchData] = useState("");
  const isOnline = useOnlineStatus();
  const PromotedCard = CardSapecial(Card);
  const { loggedUser, setName } = useContext(UserContext);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let data = await fetch(
      "https://dummyjson.com/recipes?sortBy=name&order=asc"
    );
    data = await data.json();

    setRecipes(data.recipes);
    setFilterData(data.recipes);
    // console.log(data.recipes);
  };
  const handleText = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearch = () => {
    let searchQuery = SearchData.toLowerCase();
    let filteredData = recipes.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setFilterData(filteredData);
  };
  if (isOnline === false) {
    return (
      <div className="isOnline">
        <h1>
          No internet connection, please check your connection and try again.
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className="Filter-btn mt-4 mb-4 flex   justify-center items-center ">
        <div className="w-1/2  p-2 flex gap-2 justify-center ">
          <input
            className="p-1 w-[80%] rounded border-1 border  border-cyan-900"
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleText}
            value={SearchData}
          />
          <button
            className="Search py-2 px-4 border border-1 border-cyan-900 rounded font-bold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="TopSearch py-2 px-2 border border-1 border-cyan-900 rounded font-bold mr-2"
          onClick={() => {
            let Filterrated = recipes.filter((item) => item.rating > 4.5);
            setFilterData(Filterrated);
          }}
        >
          Top rated
        </button>
        User :{" "}
        <input
          className="rounded border-1 border  border-cyan-900 p-1 ml-2"
          value={loggedUser}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {filterData.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="Cards flex flex-wrap gap-4 justify-center">
          {filterData.map((recipe, index) => (
            <Link to={`/home/${recipe.id}`} key={index}>
              {recipe.ingredients.length > 11 ? (
                <PromotedCard key={index} recipe={recipe} />
              ) : (
                <Card key={index} recipe={recipe} />
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Cards;
