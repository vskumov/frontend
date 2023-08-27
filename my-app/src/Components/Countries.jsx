import React from "react";

function Countries({name, language, population}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{language}</p>
      <p>{population}</p>
    </div>
  );
}

export default Countries;
