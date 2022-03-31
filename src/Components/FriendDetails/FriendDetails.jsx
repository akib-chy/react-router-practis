import React from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  return (
    <div>
      <h2 className="text-4xl">hello bro how are you {friendId}</h2>
    </div>
  );
};

export default FriendDetails;
