'use client'

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div>
      <span className="font-bold text-gray-500">{activeItem}</span>
      <div className="font-lg flex space-x-3">
        {activeItem !== "About" && (
          <Link href="/" onClick={() => handleItemClick("About")}> About </Link>
        )}

        {activeItem !== "Projects" && (
          <Link href="/projects" onClick={() => handleItemClick("Projects")} >
                Projects
          
          </Link>
        )}

        {activeItem !== "Resume" && (
          <Link href="/resume" onClick={() => handleItemClick("Resume")}>
            Resume
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
