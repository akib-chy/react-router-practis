import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setfriends(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl">This Is Friends Section</h2>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
