import React, { useState } from "react";
import { Link } from "react-router-dom";
import kidsCaro from "../assets/home/carousel/kids-caro.png";
import mensCaro from "../assets/home/carousel/mens-caro.png";
import womenCare from "../assets/home/carousel/women-caro.png";
import men from "../assets/home/men.png";
import women from "../assets/home/women.png";
import kids from "../assets/home/kids.png";

let Home = () => {
  let slides = [kidsCaro, mensCaro, womenCare];
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <React.Fragment>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className={`flex transition ease-out duration-40`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s) => {
              return <img src={s} alt="" className="h-full w-full" />;
            })}
          </div>

          {/* carousel-icons */}
          <div className="absolute top-0 flex justify-between items-center w-full h-full ">
            <div className="p-2 ml-4 bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer ">
              <svg
                onClick={previousSlide}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>

            <div className="p-2 mr-4 bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer ">
              <svg
                onClick={nextSlide}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          {/* carouse-indicator */}

          <div className="absolute bottom-0 py-4 flex justify-center w-full gap-3 ">
            {slides.map((s, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-3 h-3 cursor-pointer  ${
                    i == current ? "bg-gray-200" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>

          {/* carousel-text-content */}
          <div className="absolute top-[10%] left-[15%]  xl:top-[30%] xl:left-[15%]">
            {current === 0 && (
              <div className="txt-gray-200">
                <p className="text-2xl">New Trending</p>
                <p className="text-3xl my-2">kids Fashion</p>
                <p className="mb-2 text-xs italic">
                  Last call for upto 15% off
                </p>
                <span className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full  text-white ">
                  shop now
                </span>
              </div>
            )}
          </div>

          <div className="absolute top-[10%] left-[15%]  xl:top-[30%] xl:left-[15%]">
            {current === 1 && (
              <div className="txt-gray-200">
                <p className="text-2xl">New Trending</p>
                <p className="text-3xl my-2">Mens Fashion</p>
                <p className="mb-2 text-xs italic">
                  Last call for upto 15% off
                </p>
                <span className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full  text-white ">
                  shop now
                </span>
              </div>
            )}
          </div>

          <div className="absolute top-[10%] left-[15%] md:top-[20%]  xl:top-[30%] xl:left-[15%]">
            {current === 2 && (
              <div className="txt-gray-200">
                <p className="text-2xl">New Trending</p>
                <p className="text-3xl my-2">Womens Fashion</p>
                <p className="mb-2 text-xs italic">
                  Last call for upto 15% off
                </p>
                <span className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full  text-white ">
                  shop now
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* carousel-section end  */}

      <div className="container  mx-auto lg:flex lg:justify-evenly   lg:space-x-4">
        <div className="border-2 border-gray-40 px-4 py-4 my-6 flex  ">
          <div className="px-4">
            <svg
              className="w-10 h-10 text-gray-600 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
              <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
              <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </div>
          <div className="text-gray-700">
            <h3 className="font-bold ">FREE SHIPPING & RETURN</h3>
            <h4 className="text-xs">Free shipping on all orders over $49</h4>
          </div>
        </div>

        <div className="border-2 border-gray-40 px-4 py-4 my-6 flex ">
          <div className="px-4">
            <svg
              className="w-10 h-10 text-gray-600 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-gray-700">
            <h3 className="font-bold ">MONEY BACK GUARANTEE</h3>
            <h4 className="text-xs">100% money back guarantee</h4>
          </div>
        </div>

        <div className="border-2 border-gray-40 px-4 py-4 my-6 flex ">
          <div className="px-4">
            <svg
              className="w-10 h-10 text-gray-600 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-gray-700">
            <h3 className="font-bold ">ONLINE SUPPORT 24/7</h3>
            <h4 className="text-xs">Awesome Support for 24/7 Days</h4>
          </div>
        </div>
      </div>

      <div className="container mx-auto  lg:flex lg:space-x-6 ">
        <div className="border-1 border-gray-400 bg-violet-100  my-6 grid grid-cols-2  ">
          <div className="">
            <img src={men} className="w-50 h-60  " alt="" />
          </div>
          <div className="  flex flex-col justify-center justify-self-start">
            <p className="font-semibold text-2xl text-gray-600">MEN WEAR</p>
            <p className="text-sm text-gray-500">
              Starting at <span>&#8377;</span> 199
            </p>
            <Link
              to={"/products/men"}
              className="border-2 border-gray-400 w-28 h-8 text-center py-1 mt-4 text-sm text-gray-600"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        <div className="border-1 border-gray-400 bg-yellow-100 my-6  grid grid-cols-2 ">
          <div className="">
            <img src={women} className="w-50 h-60  " alt="" />
          </div>
          <div className="  flex flex-col justify-center justify-self-start">
            <p className="font-semibold text-2xl text-gray-600">WOMEN WEAR</p>
            <p className="text-sm text-gray-500">
              Starting at <span>&#8377;</span> 199
            </p>
            <Link
              to={"/products/women"}
              className="border-2 border-gray-400 w-28 h-8 text-center py-1 mt-4 text-sm text-gray-600"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        <div className="border-1 border-gray-400 bg-teal-100 my-6  grid grid-cols-2">
          <div className="">
            <img src={kids} className="w-50 h-60  " alt="" />
          </div>
          <div className="  flex flex-col justify-center justify-self-start">
            <p className="font-semibold text-2xl text-gray-600">KIDS WEAR</p>
            <p className="text-sm text-gray-500">
              Starting at <span>&#8377;</span> 199
            </p>
            <Link
              to={"/products/kids"}
              className="border-2 border-gray-400 w-28 h-8 text-center py-1 mt-4 text-sm text-gray-600"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-[100px]"></div>
    </React.Fragment>
  );
};
export default Home;
