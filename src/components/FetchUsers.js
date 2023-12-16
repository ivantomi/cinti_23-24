"use client";
import React from "react";
import { useEffect, useState } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://6561a305dcd355c0832401ab.mockapi.io/demo/PC"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista svih korisnika:</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4 className="text-4xl">{user.name}</h4>
            <h4>{user.description}</h4>
            <h4>{user.price}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default FetchUsers;
