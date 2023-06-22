import Link from "next/link";
import React from "react";
import style from "./Page.module.css";

const menu_items = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "Home",
    link: "/",
  },
];

const PlayGround = () => {
  return (
    <>
      <nav className="my-5 mx-60 flex justify-between">
        <h2 className="text-lg font-semibold gap">PageTitle</h2>
        {/* <div className="flex gap-10 text-red-300">
        {menu_items.map((item) => item.title)}
      </div> */}
        <div className="flex-row flex gap-4">
          <Link className={style.nav_items} href="/">
            <span className={style.item}>Home</span>
          </Link>
          <Link className={style.nav_items} href="/">
            <span className={style.item}>About</span>
          </Link>
          <Link className={style.nav_items} href="/">
            <span className={style.item}>Contact</span>
          </Link>
        </div>
      </nav>
      <section>
        <div className="container bg-slate-800 px-4 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-5xl mb-5">This is ...</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quod consequatur mollitia omnis accusamus architecto vitae ducimus
              provident aspernatur ea!
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayGround;
