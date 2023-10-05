import React from "react";

function InterviewCards({ title, url, details }) {
  return (
    <div className="intCard">
      <p>
        <a href={url}>{title}</a>
      </p>
      <p className="publication-details">
        <i class="las la-link"></i> {details}
      </p>
    </div>
  );
}

export default InterviewCards;
