import React, { useEffect, useState } from "react";

const TagList = () => {
  const [tags, setTags] = useState<string>("");

  return (
    <div>
      {tags && <h1>{tags}</h1>}
      <button onClick={() => setTags("easin")}>setText</button>
    </div>
  );
};

export default TagList;
