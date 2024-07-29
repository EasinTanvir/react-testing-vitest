import React, { useState } from "react";

const CheckButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h1>Term & Condition</h1>
      <div>
        <label>
          <input
            onChange={() => setIsChecked(!isChecked)}
            type="checkbox"
            name=""
            id=""
          />
          Accept Term And Condition
        </label>
      </div>

      <button disabled={!isChecked}>Checked</button>
    </div>
  );
};

export default CheckButton;
