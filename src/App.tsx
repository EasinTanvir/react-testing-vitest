import React, { useState } from "react";
import UserList from "./components/UserList";
import Account from "./components/Account";

const user = [
  {
    id: 1,
    name: "Easin",
    isAdmin: false,
  },
  {
    id: 2,
    name: "Tanvir",
    isAdmin: true,
  },
];

let data = {
  name: "Easin",
  isAdmin: true,
};

const App = () => {
  return (
    <div>
      <>
        <UserList user={user} />
        <Account user={data} />
      </>
    </div>
  );
};

export default App;
