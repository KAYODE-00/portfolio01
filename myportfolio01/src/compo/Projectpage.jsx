import Projects from "./Projects"


function Projectpage() {
  return (
    <> 
      <div
        className={`flex flex-col  place-self-center  md:mt-20 mt-20 w-full mb-20 text-gray-400/50 px-5 md:px-23`}
      >
        <span className="md:mb-10 mb-5 flex flex-col gap-3">
          <h2 className="text-gray-400/50 break-words">
            //Here is collection of projects i've built using
            HTML,CSS,JAVASCRIPT,REACT,TAILWIND,FIGMA and WORDPRESS.
          </h2>
          <h2 className="text-gray-400/50">
            //Each projects focuses on solving real-world problems,enhancing
            user experience, or improving workflow efficiency.
          </h2>
        </span>
     <Projects/>
    </div>

    </>
  )
}

export default Projectpage