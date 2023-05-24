import React from "react";

function Projects() {
  return (
    <div>
      {Array(5)
        .fill("0")
        .map((element, index) => {
          return <br key={index} />;
        })}
      <span className="footer fs-3 fw-bold">
        See My Other Projects 🙂
        <br />
      </span>
    </div>
  );
}

export default Projects;
