import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";

export default function Projects() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="bg-[#1e1e1e] border-1 border-[#5c5959] md:w-13 md:h-13 cursor-pointer w-5 h-5 items-center justify-items-center rounded-full absolute right-8 top-35 sm:top-130   md:top-130 lg:top-70  z-10"
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
        className="bg-[#1e1e1e] border-1 border-[#5c5959] md:w-13 md:h-13 cursor-pointer  w-5 h-5 items-center justify-items-center rounded-full absolute left-8 top-35 sm:top-130  md:top-130 lg:top-70  z-10"
        onClick={onClick}
      >
        <button className="flex items-center justify-content-center place-self-center">
          <i className="bxr bx-arrow-right-stroke flex   place-self-center text-lg md:text-4xl   cursor-pointer"></i>
        </button>
      </div>
    );
  };

  const settings = {
    dots: true,
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
      <div className="">
        <Slider {...settings}>
          {data.map((project, ind) => (
            <div key={ind} className="cont    ">
              <div className="place-self-center ">
                <h1 className="mb-2 ml-3 text-gray-200  text-lg">
                  {project.title}
                </h1>
                <img
                  src={project.smimg}
                  alt=""
                  className="md:px-20 lg:px-30 xl:px-40"
                />
                <a href={project.peojectlink}>
                  {" "}
                  <button className="bg-[#1e1e1e] border-[1px] ml-3 mt-3 px-5 py-0.5 rounded-4xl  text-[0.5rem] md:text-[1rem] cursor-pointer shadow-gray-800/80 shadow ">
                    View
                  </button>
                </a>
                <p className="flex items-center mt-1 ">{project.text}</p>
                <div className="">
                  <button className="bg-[#1e1e1e] border-[1px]  font-extrabold ml-1 mt-3 px-5 py-0.5 rounded-4xl  text-[0.5rem] md:text-[1rem] cursor-pointer shadow-gray-800/80 shadow">
                    {project.stacks.stack1}
                  </button>{" "}
                  <button className="bg-[#1e1e1e] border-[1px]  font-extrabold ml-1 mt-3 px-5 py-0.5 rounded-4xl  text-[0.5rem] md:text-[1rem] cursor-pointer shadow-gray-800/80 shadow">
                    {project.stacks.stack2}
                  </button>{" "}
                  <button className="bg-[#1e1e1e] border-[1px]  font-extrabold ml-1 mt-3 px-5 py-0.5 rounded-4xl  text-[0.5rem] md:text-[1rem] cursor-pointer shadow-gray-800/80 shadow">
                    {project.stacks.stack3}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
