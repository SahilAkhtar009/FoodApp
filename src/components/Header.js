import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext.js";
function Header() {
  const [Log, setLog] = useState("Log in");
  const isOnline = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);

  const handleClick = () => {
    Log == "Log in" ? setLog("Log out") : setLog("Log in");
  };
  return (
    <div className="bg-pink-200 flex justify-between items-center p-2 shadow-md">
      <div className="Logo">
        <img
          className="w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
          alt="Logo"
        />
      </div>
      <ul className="NavItems flex justify-around items-center gap-5 font-bold px-5">
        <li>Status {isOnline ? "🟢" : "🔴"}</li>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/Info">
          <li>Info</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/grocery">
          <li>Grocery</li>
        </Link>
        <button
          className="Login w-[100px] py-2 border border-1 border-cyan-900 rounded"
          onClick={handleClick}
        >
          {Log}
        </button>
        <li>{loggedUser}</li>
      </ul>
    </div>
  );
}

export default Header;
