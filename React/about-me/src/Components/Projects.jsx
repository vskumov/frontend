import React from "react";

function Projects(events) {
  return (
    <div className="container">
      <h3>Проекты</h3>
      {events.children}
    </div>
  );
}

export default Projects;
