import React, { useEffect, useId, useState } from "react";
import { useParams } from "react-router";

const users = [
  {
    name: "Sayantan Das",
    id: 123,
  },
  {
    name: "Parth",
    id: 342,
  },
];

function Userabout() {
  const { userid } = useParams();
  console.log(userid);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const user = users.find((user) => user.id == userid);
    setSelectedUser(user);
  }, []);

  // backend call
  //login execute

  return (
    <div className="p-10 text-white">
      <h1>Welcome to user about page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, iure?
      </p>
      {selectedUser ? (
        <h1 className="text-3xl mt-10">You have select {selectedUser?.name}</h1>
      ) : (
        <h1 className="text-3xl mt-10">Not user selected.</h1>
      )}
    </div>
  );
}

export default Userabout;
