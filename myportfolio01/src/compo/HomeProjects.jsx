import { data } from "./data";
import Slider from "react-slick";

export default function HomeProjects() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="bg-[#1e1e1e] hidden border-1 border-[#5c5959] md:w-13 md:h-13 cursor-pointer  w-5 h-5  items-center justify-items-center rounded-full absolute right-15 sm:top-170 top-250 md:top-230 lg:top-220 z-10"
        onClick={onClick}
      >
        <button className="flex items-center justify-content-center  place-self-center">
          <i className="bxr  bx-arrow-left-stroke flex md:text-4xl  place-self-center text-lg cursor-pointer"></i>
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="bg-[#1e1e1e] border-1 hidden border-[#5c5959] md:w-13 md:h-13 cursor-pointer  w-5 h-5  items-center justify-items-center rounded-full absolute left-15 sm:top-170 top-250 md:top-230 md:left-30 lg:top-220 z-10"
        onClick={onClick}
      >
        <button className=" items-center hidden justify-content-center place-self-center">
          <i className="bxr bx-arrow-right-stroke    place-self-center text-lg md:text-4xl hidden  cursor-pointer"></i>
        </button>
      </div>
    );
  };

  const settings = {
    
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className=" ">
        <Slider {...settings}>
          {data.map((project, ind) => (
            <div key={ind} className="md:px-15 p-2.5 w-full ">
              <h1 className="mb-2 ml-3 text-gray-200  text-lg">
                {project.title}
              </h1>
              <img src={project.smimg} alt="" className="w-150" />
              <a href={project.peojectlink}>
                {" "}
                <button className="bg-[#1e1e1e] border-[1px] ml-3 mt-3 px-5 py-0.5 rounded-4xl  text-[0.5rem] md:text-[1rem] cursor-pointer shadow-gray-800/80 shadow">
                  View
                </button>
              </a>
              <p className="flex items-center mt-1 ">{project.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
