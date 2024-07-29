import React, { useState } from "react";

const ShowTitle = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      {state && <input type="text" name="" id="" />}

      <button onClick={() => setState(!state)}>
        {!state ? "Show" : "hide"}
      </button>
    </div>
  );
};

export default ShowTitle;
