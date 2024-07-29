import React from "react";
type Props = {
  name?: string;
};

const Greet = ({ name }: Props) => {
  if (name) {
    return <h1>{name}</h1>;
  }

  return <button>Login here</button>;
};

export default Greet;
