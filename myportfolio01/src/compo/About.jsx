
function About() {
  return (
    <>
      <div className="place-self-center  w-full break-word text-xs md:text-sm lg:text-base xl:text-lg px-5 md:px-23 ">
        <div
          className={`  text-[#706c6cb3] ml-3 mt-15 md:mt-25 flex flex-col gap-5  `}
        >
          <div >
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
              &#123;/* About Me*/&#125;
            </div>

            <div className="-ml-1   flex flex-col items-center ">
              <p className=" text-xs md:text-sm lg:text-base xl:text-lg flex flex-col mb-2">
                Hi, I'm Kayode a pasionate Frontend Developer who loves turning
                ideas into interactive user interfaces. I craft seamless and
                responsive web experiences, interactive websites with HTML, CSS,
                JavaScript, React & Tailwind. I also design with Figma and
                create functional sites using WordPress templates.
                <span className="md:mt-3 mt-1">
                  {" "}
                  My code might not win beauty contest yet - but it works, and
                  it keeps getting better.{" "}
                </span>
              </p>
            </div>
          </div>{" "}
          <div >
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
              &#123;/* Personality */&#125;
            </div>

            <div className="-ml-1   flex flex-col  ">
              <p className=" text-xs md:text-sm lg:text-base xl:text-lg  mb-2">
                When I'm not coding, i enjoy exploring new UI inspirations,
                learning web3 trends, or thinking about side projects tht could
                become startups.
              </p>
            </div>
          </div>
          <div >
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-45">
              &#123;/* What i do */&#125;
            </div>

            <div className="-ml-1   flex flex-col ">
              <p
                className={` text-xs md:text-sm lg:text-base xl:text-lg  mb-2 flex flex-col `}
              >
                <span>-Build responsive and accessible websites</span>
                <span>-Turn Figma designs into functional pages</span>
                <span>-Use Wordpress to create dynamic websites.</span>
              </p>
            </div>
          </div>{" "}
          <div className="flex md: flex-col md:flex-row justify-center gap-5 md:gap-30">
            <div >
              <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
                &#123;/* SKILLS */&#125;
              </div>
              <div className="flex  flex-col  text-xs md:text-sm lg:text-base xl:text-lg">
                <p >
                  {" "}
                  <i className="devicon-html5-plain colored mr-2 "></i>HTML
                </p>
                <p >
                  {" "}
                  <i className="devicon-css3-plain colored mr-2 "></i>CSS
                </p>
                <p >
                  {" "}
                  <i className="devicon-javascript-plain colored mr-2 "></i>
                  JAVASCRIPT
                </p>
                <p >
                  {" "}
                  <i className="devicon-react-original colored mr-2 "></i>
                  REACT
                </p>
                <p >
                  {" "}
                  <i className="devicon-tailwindcss-original colored mr-2 "></i>
                  TAILWIND
                </p>
              
                  {" "}
                <p className=" flex items-center">
                  {" "}
             <img src="Figma.png" alt="" className="w-4 h-4 -ml-0.5 mb-1"  />
                  FIGMA
                </p>
                <p >
                  {" "}
                  <i className="devicon-wordpress-plain text-blue-300 mr-2 "></i>
                  NO CODE WEB DEVELOPMENT
                </p>
              </div>
            </div>
            <div >
              <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
                &#123;/* Tools */&#125;
              </div>{" "}
              <div className="flex  flex-col  text-xs md:text-sm lg:text-base xl:text-lg">
                <p >
                  {" "}
                  <i className="devicon-git-plain mr-2  text-orange-600"></i>
                  GIT
                </p>
                <p >
                  {" "}
                  <i className="devicon-github-plain mr-2 text-white"></i>
                  GITHUB
                </p>
                <p >
                  {" "}
                  <i className="devicon-visualstudio-plain  mr-2 text-blue-400 "></i>
                  VSCODE
                </p>
                <p className=" flex items-center">
                  {" "}
             <img src="Figma.png" alt="" className="w-4 h-4 -ml-0.5 mb-1"  />
                  FIGMA
                </p>
                <p >
                  {" "}
                  <i className="devicon-wordpress-plain text-blue-300 mr-2 "></i>
                  WORDPRESS
                </p>
                <p >
                  {" "}
                  <i className="devicon-vercel-original colored mr-2 "></i>
                  VERCEL
                </p>
              </div>
            </div>
            <div className="-ml-1  md:-mb-3 flex flex-col  "></div>
          </div>{" "}
          <div >
            <div className="mb-4 text-[0.7rem] md:text-[1rem] md:mb-2 text-gray-300  md:w-55">
              &#123;/* My approach */&#125;
            </div>{" "}
            <div className="-ml-1  md:-mb-3 flex flex-col  ">
              <p className=" text-xs md:text-sm lg:text-base xl:text-lg md:w-[750px] flex flex-col md:  md:gap-2 mb-2">
                <span >-Functional Ui </span>
                <span >-Mobile-first </span>{" "}
                <span >-Constatntly learning </span>{" "}
                <span >-Always exploring </span>{" "}
              </p>
            </div>
          </div>{" "}
        </div>
      </div>

      
    </>
  );
}

export default About;

