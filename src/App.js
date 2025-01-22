import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
// import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Info from "./components/Info.js";
import Contact from "./components/Contact.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Details from "./components/Details.js";
import UserContext from "./Utils/UserContext.js";

function App() {
  const [Name, setName] = useState("Default");
  console.log(Name);
  return (
    <UserContext.Provider value={{ loggedUser: Name, setName }}>
      <div className="p-2">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
  );
}
const Grocery = lazy(() => import("./components/Grocery"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "/home",
        element: <Cards />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            {" "}
            <Grocery />,{" "}
          </Suspense>
        ),
      },
      {
        path: "/home/:id",
        element: <Details />,
      },
    ],
    // errorElement: <Error />,
  },
]);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router} />);
