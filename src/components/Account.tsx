import React from "react";

type User = {
  name: string;
  isAdmin: boolean;
};

const Account = ({ user }: { user: User }) => {
  return (
    <div>
      <h1>Hello</h1>
      {user.isAdmin && <button>Edit</button>}

      <div>
        <strong>Name</strong> : {user.name}
      </div>
    </div>
  );
};

export default Account;
