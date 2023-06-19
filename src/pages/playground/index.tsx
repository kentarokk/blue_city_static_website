import React from "react";

const menu_items = ["About", "service", "Contact"];

const PlayGround = () => {
  return (
    <nav className="text-lime-400">
      <h2>PageTitle</h2>
      <div className="flex gap-4 text-red-300">
        {menu_items.map((item) => item)}
      </div>
    </nav>
  );
};

export default PlayGround;
