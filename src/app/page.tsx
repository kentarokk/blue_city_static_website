"use client";

import style from "./Page.module.css";
import NavBar from "../components/NavBar/NavBar";
import CircleButton from "@/components/CircleButton/CircleButton";
import Footer from "@/components/Footer";
import CountSection from "@/components/CountSection";
import CategorySection from "@/components/CategorySection";
import ThisIsSection from "@/components/ThisIsSection";
import Hero from "@/components/Hero";

const PlayGround = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <CircleButton />
      <div className={style.scrollDownDiv}>
        <span className={style.scrollDown}></span>
        <span className={style.scrollDownText}>Scroll</span>
      </div>
      <ThisIsSection />
      <CategorySection />
      <CountSection />
      <Footer />
    </>
  );
};

export default PlayGround;
