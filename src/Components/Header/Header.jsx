import React, { useState } from "react";
import Link from "../Link/Link";

const Header = () => {
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Friends", link: "/friends" },
    { id: 3, name: "About", link: "/about" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="text-left text-3xl bg-indigo-300 md:hidden"
      >
        {open ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>

      <ul
        className={`md:flex justify-center absolute duration-500 ease-in md:static bg-indigo-300 w-full py-3 ${
          open ? "top-8" : "top-[-120px]"
        }`}
      >
        {links.map((linkName) => (
          <Link key={linkName.id} linkName={linkName}></Link>
        ))}
      </ul>
      <h1 className="text-4xl">Welcome TO React Router !!!!</h1>
    </div>
  );
};

export default Header;
