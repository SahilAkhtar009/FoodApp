import React from "react";
import { useRouteError } from "react-router";
function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h3>Please try again later.</h3>

      <p> {error.statusText}</p>
      <p>Status: {error.status}</p>
    </div>
  );
}

export default Error;
