import React from "react";
import TestFramerMotion from "../elements/TestFramerMotion";
import SmallButton from "../elements/SmallButton/SmallButton";

const Hero = () => {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-300">
            lLorem ipsum dolor sit amet
            <br className="hidden lg:inline-block" />
            fuga ex eos rem. Minus omnis
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste
            sed fuga ex eos rem. Minus omnis alias sequi laudantium at eaque
            repellendus libero praesentium? Ex nesciunt veritatis nulla
            quisquam?
          </p>
          <div className="flex justify-center items-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Explore
            </button>
            <div className="ml-3">
              <SmallButton>Contact Us</SmallButton>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <TestFramerMotion>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="city.jpg"
            />
          </TestFramerMotion>
        </div>
      </div>
    </section>
  );
};

export default Hero;
