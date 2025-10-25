import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";
import Footer from "./Footer";

export default function Devfolio(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [hPage, setHpage] = useState(true);
  const [aPage, setApage] = useState(true);
  const [pPage, setPpage] = useState(true);
  const [cPage, setCpage] = useState(true);


  return (
    <>
      <div className="w-full overflow-hidden">
        <div className=" min-h-screen w-full flex flex-row">
          <div className="flex flex-row ">
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              bgTog={props.bgTog}
              darkM={props.darkM}
              hPage={hPage}
              setHpage={setHpage}
              aPage={aPage}
              setApage={setApage}
              cPage={cPage}
              setCpage={setCpage}
              pPage={pPage}
              setPpage={setPpage}

            />
          </div>
          <div className="w-full bg-[#1e1e1e]">
            <Container
              bgTog={props.bgTog}
              darkM={props.darkM}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              hPage={hPage}
              setHpage={setHpage}
              aPage={aPage}
              setApage={setApage}
              cPage={cPage}
              setCpage={setCpage}
              pPage={pPage}
              setPpage={setPpage}

            />
          </div>
        </div>
        <div
          className={` ${
            isOpen ? `md:ml-67.5` : `md:ml-15`
          } w-full   md:block xl:block lg:block   bg-[#f5f5f5]  dark:dark:bg-[#f8e2e2]`}
        >
          <Footer
            hPage={hPage}
            setHpage={setHpage}
            aPage={aPage}
            setApage={setApage}
            cPage={cPage}
            setCpage={setCpage}
            pPage={pPage}
            setPpage={setPpage}
          />   <div className="place-self-center pl-8 md:pl-0 pb-5  bg-[#222223] flex md:flex-row sm:flex-row flex-col items-center md:place-content-center w-full  text-gray-300/50 ">
              <span className=" mr-2">
               ©{new Date().getFullYear()}. All rights reserved Kayode
              </span>{" "}
            </div>
        </div>
                 
      </div>
    </>
  );
}
