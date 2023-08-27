import React from "react";

function Paragraph() {
  const handleClick = (e) => {
    console.log(`Текст параграфа: ${e.target.textContent}`);
  };

  return (
    <div onClick={handleClick}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem illo nisi nostrum blanditiis eos accusamus libero voluptates sunt iusto
        placeat.
      </p>
      <p>Click on me!</p>
      <p>See in console</p>
    </div>
  );
}

export default Paragraph;
