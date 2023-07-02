import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="my-5 mx-10 lg:mx-60 flex flex-row justify-between items-center">
        <Image
          src="/logo.svg"
          alt="bluecity"
          width={90}
          height={80}
          className="mt-3"
        />
        {/* <div className="flex gap-10 text-red-300">
        {menu_items.map((item) => item.title)}
      </div> */}
        <div className="flex-row flex gap-4 hidden lg:inline-block">
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

        <div
          className={isOpen ? style.open_toggle_btn : style.toggle_btn}
          onClick={toggleIsOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
