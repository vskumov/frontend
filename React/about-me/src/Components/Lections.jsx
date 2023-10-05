import React from 'react'

function Lections(lections) {
  return (
    <div className="container">
    <h3>Лекции</h3>
    {lections.children}
  </div>
  )
}

export default Lections