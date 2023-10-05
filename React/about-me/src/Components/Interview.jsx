import React from "react";

function Interview({ title, url, details }) {
  return (
    <>
    <li>
      <p><a href={url}>{title}</a></p>
      <p className="publication-details"><i class="las la-link"></i> {details}</p>
    </li>
    </>
  );
}

export default Interview;
