"use client";

import style from "./Page.module.css";
import NavBar from "../components/section/NavBar/NavBar";
import CircleButton from "@/components/elements/CircleButton/CircleButton";
import Footer from "@/components/section/Footer";
import CountSection from "@/components/section/CountSection";
import ImageSection from "@/components/section/ImageSection";
import CategorySection from "@/components/section/CategorySection";
import ThisIsSection from "@/components/section/ThisIsSection";
import Hero from "@/components/section/Hero";

const PlayGround = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="my-10">
        <CircleButton />
      </div>
      <div className={style.scrollDownDiv}>
        <span className={style.scrollDown}></span>
        <span className={style.scrollDownText}>Scroll</span>
      </div>
      <ThisIsSection />
      <ImageSection />
      <CategorySection />
      {/* <CountSection /> */}
      <Footer />
    </>
  );
};

export default PlayGround;
