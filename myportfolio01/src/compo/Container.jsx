import About from "./About";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

import Contact from "./Contact";
import Tabs from "./Tabs";
import Projectpage from "./Projectpage";


function Container(props) {
  return (
    <>
      <div className=" flex flex-col  ">
        <div
          className={` ${
            props.isOpen ? `md:ml-67.5 ` : `md:ml-15.5`
          } hidden fixed w-full top-0  md:block xl:block lg:block z-10  bg-[#f5f5f5]  dark:dark:bg-[#1e1e1e]`}
        >
          <Tabs

          />
        </div>

        <div
          className={` w-full place-self-center  ${
            props.isOpen ? `md:ml-95` : `md:ml-15`
          } `}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home  />
              }
            />
            <Route
              path="/About"
              element={<About  />}
            />
            <Route
              path="/Projectspage"
              element={<Projectpage />}
          
            />
            <Route
              path="/Contacts"
              element={<Contact  />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Container;
