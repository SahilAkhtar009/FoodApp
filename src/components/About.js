import React from "react";
import UserClass from "./Userclass";

function About() {
  return (
    <div className="DetShimmer">
      <h1>About</h1>
      <p>this is About Page</p>
      <UserClass Data={"First"} />
      {/* <UserClass Data={"Second"} /> */}
    </div>
  );
}

export default About;
