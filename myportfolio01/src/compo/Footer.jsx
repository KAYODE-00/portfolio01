import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Footer() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    if (value === "home") navigate("/");
    else if (value === "project") navigate("/Projectspage");
    else if (value === "about") navigate("/About");
    else if (value === "contact") navigate("/Contacts");
  };
  return (
    <>
      <div
        className={` bg-[#222223] border-t-1 border-[#0e0e0e] w-full
           text-gray-200 text-[0.7rem] flex items-center justify-center  `}
      >
        <div className=" font-mono h-45 mb-10 sm:h-[300px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] w-screen ">
          <div className="flex flex-col gap-3 p-3 ">
            {" "}
            <div className="flex flex-col  ">
              <div>
                {" "}
                <span className="text-yellow-200 ">npm</span> who-am-i?{" "}
              </div>
              <div className="">
                {" "}
                Hi, I'm Kayode,a passionate Frontend Developer who loves turning
                ideas into interactive user interfaces.
              </div>
            </div>
            <div className="flex flex-col  ">
              {" "}
              <div className="flex">
                <span className="text-yellow-200 mr-2 ">npm </span> contact dev{" "}
              </div>
              <p className="flex flex-col">
                <a
                  href="mailto:abdulwahabkayode001@gmail.com"
                  className="text-blue-400 underline w-15"
                >
                  Mail
                </a>{" "}
                <a
                  href="http://linkedin.com/in/abdulwahabkayode"
                  className="text-blue-400 underline w-15"
                >
                  LinkedIn
                </a>{" "}
                <a
                  href="http://github.com/KAYODE-00"
                  className="text-blue-400 underline w-15"
                >
                  {" "}
                  Github
                </a>
              </p>
            </div>
            <div className="flex items-center ">
              {" "}
              <span className="text-yellow-200 mr-2 ">npm </span> run{" "}
              <span className="">
                {" "}
                <input
                  type="text"
                  value={input}
                  className="ml-2  outline-0  px-1  rounded-[6px] bg-[#1312126b] "
                  onChange={handChange}
                  placeholder="input command "
                />
              </span>{" "}
            </div>
          
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Footer;
