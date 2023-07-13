import React from "react";
import AnimationButton from "./AnimationButton/AnimationButton";

const ThisIsSection = () => {
  return (
    <section>
      <div className="container bg-slate-800 px-4 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl mb-5">This is ...</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod
            consequatur mollitia omnis accusamus architecto vitae ducimus
            provident aspernatur ea!
          </h3>
        </div>
        <AnimationButton>detail...</AnimationButton>
      </div>
    </section>
  );
};

export default ThisIsSection;
