import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { externalLinks } from "./General";

function Footer() {
  return (
    <div className="container-fluid">
      <div
        className="footer bg-dark text-white p-3 d-flex flex-row justify-content-between align-items-center fs-5
       flex-wrap justify-content-sm-between justify-content-md-between justify-content-lg-between flex-sm-wrap gap-3"
      >
        <div>Copyrights ©, All Rights Reserved, 2023 | Sathiyapramod</div>
        <div className="d-flex flex-row justify-content-center gap-5 gap-sm-5 mx-auto m-lg-0 m-md-0">
          <a
            href="https://github.com/Sathiyapramod"
            target="_blank"
            rel="noreferrer"
            style={externalLinks}
          >
            <GitHubIcon fontSize="medium" />
          </a>
          <a
            href="https://www.linkedin.com/in/sathiyapramod/"
            target="_blank"
            rel="noreferrer"
            style={externalLinks}
          >
            <LinkedInIcon fontSize="medium" />
          </a>
          <a
            href="https://twitter.com/Sathiyapramod"
            target="_blank"
            rel="noreferrer"
            style={externalLinks}
          >
            <TwitterIcon fontSize="medium" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
