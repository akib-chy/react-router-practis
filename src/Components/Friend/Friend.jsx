import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;
  const navigate = useNavigate();
  const showFriendDetails = () => {
    const path = `/friends/${id}`;
    navigate(path);
  };
  return (
    <div className="mt-4">
      <h2 className="text-cl">Name: {name}</h2>
      <button
        className="bg-red-500 py-1 px-2 text-white rounded"
        onClick={showFriendDetails}
      >
        {username}
      </button>
    </div>
  );
};

export default Friend;
