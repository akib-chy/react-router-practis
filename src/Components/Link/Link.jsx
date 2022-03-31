import React from "react";

const Link = ({ linkName }) => {
  const { name, link } = linkName;
  return (
    <li className="text-xl ml-8 md:ml-8 text-white font-bold hover:text-red-400 duration-200 ease-in">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
