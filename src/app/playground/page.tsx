import Link from "next/link";
import React from "react";

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
    <nav className="my-5 mx-20 flex justify-between">
      <h2 className="text-lg font-semibold">PageTitle</h2>
      {/* <div className="flex gap-10 text-red-300">
        {menu_items.map((item) => item.title)}
      </div> */}
      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
      </div>
    </nav>
  );
};

export default PlayGround;
