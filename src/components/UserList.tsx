import React from "react";

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const UserList = ({ user }: { user: User[] }) => {
  if (user.length === 0) {
    return <p>No User Found</p>;
  }
  return (
    <div>
      {user.map((item: User) => (
        <li>
          <a href={`/user/${item.id}`}>{item.name}</a>
        </li>
      ))}
    </div>
  );
};

export default UserList;
