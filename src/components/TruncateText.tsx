import React, { useState } from "react";

type Props = {
  text: string;
};

const TruncateText = ({ text }: Props) => {
  const [showFull, setShowFull] = useState(false);

  if (text.length < 12) return <h1>{text}</h1>;

  return (
    <div>
      {showFull ? (
        <article>{text}</article>
      ) : (
        <article>{text.substring(0, 15) + "..."}</article>
      )}

      <button onClick={() => setShowFull(!showFull)}>
        {!showFull ? "Show Full" : "Hide"}
      </button>
    </div>
  );
};

export default TruncateText;
