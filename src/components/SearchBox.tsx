import React, { useState } from "react";

type Props = {
  onChange: (text: string) => void;
};

const SearchBox = ({ onChange }: Props) => {
  const [text, setText] = useState<string>("");

  const onPressEnterHandler = (enter: boolean) => {
    if (enter && text) {
      onChange(text);
    }
  };

  return (
    <div>
      {text && <p>{text}</p>}
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(event) => onPressEnterHandler(event.key === "Enter")}
      />
    </div>
  );
};

export default SearchBox;
