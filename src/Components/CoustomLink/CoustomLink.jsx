import React from "react";
import { Link } from "react-router-dom";

const CoustomLink = ({ linkName }) => {
  const { name, link } = linkName;
  return (
    <li className="text-xl ml-8 md:ml-8 text-white font-bold hover:text-red-400 duration-200 ease-in">
      <Link to={link}>{name}</Link>
    </li>
  );
};

export default CoustomLink;
