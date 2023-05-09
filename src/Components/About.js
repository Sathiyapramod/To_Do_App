import React from "react";
import { Typography } from "@mui/material";

function About() {
  return (
    <div>
      {Array(5)
        .fill("0")
        .map((element, index) => {
          return <br key={index} />;
        })}
      <Typography variant="h5">
        <a
          href="https://github.com/Sathiyapramod"
          target="blank"
          rel="noreferrer"
        >
          Sathiyapramod
        </a>{" "}
        here 👋 <br />
        <br />
        <Typography>
          Follow me on{" "}
          <a
            href="https://www.linkedin.com/in/sathiyapramod"
            target="_blank"
            rel="noreferrer"
          >
            <img
              align="center"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
              alt="LinkedInProfile"
              height="20"
              width="20"
            />{" "}
            LinkedIn{" "}
          </a>
        </Typography>
        <br />
        <Typography className="fs-5">
          About Me 🙂 <br />
          <br />
          - 🌱 Currently learning HTML,CSS, Javascript. <br />- 🏃🏼‍♂️ Practising
          ReactJS,
          <a href="https://getbootstrap.com/" target="blank">
            Bootstrap
          </a>
          ,{" "}
          <a href="https://mui.com/" target="blank">
            Material UI
          </a>
        </Typography>
      </Typography>
      <div className="skills">
        <img
          src="https://github-readme-stats.vercel.app/api/?username=sathiyapramod&layout=compact&theme=vision-friendly-light"
          alt="stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=sathiyapramod&layout=compact$theme=vision-friendly-light"
          alt="languages"
        />
      </div>
    </div>
  );
}

export default About;
