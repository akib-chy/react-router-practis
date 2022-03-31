import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  const { name, username, address, phone, email, website } = friend;
  return (
    <div>
      <h2 className="text-4xl">Friend Detaiils {friendId}</h2>
      <h3>Name: {name}</h3>
      <h4>{username}</h4>
      <p>{address?.street}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
};

export default FriendDetails;
