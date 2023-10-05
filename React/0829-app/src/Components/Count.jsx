import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) ?? 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> + 1 </button>
    </div>
  );
}

export default Count;
