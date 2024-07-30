import React, { useState } from "react";
import UserList from "./components/UserList";
import Account from "./components/Account";
import CheckButton from "./components/CheckButton";
import ShowTitle from "./components/ShowTitle";
import TruncateText from "./components/TruncateText";
import SearchBox from "./components/SearchBox";
import TagList from "./components/TagList";
import DataFetch from "./dataFetch/DataFetch";
import FetchDetails from "./dataFetch/FetchDetails";

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
        <CheckButton />
        <ShowTitle />
        <TruncateText text="My name is Easin! Who are you My name is Easin! Who are you" />
        <SearchBox onChange={(data) => console.log(data)} />
        <TagList />
        <DataFetch />
        <FetchDetails id={1} />
      </>
    </div>
  );
};

export default App;
