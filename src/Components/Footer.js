import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { externalLinks } from "./General";
import { useMediaQuery } from "@mui/material";

function Footer() {
  const isDesktop = useMediaQuery("(min-width:768px)");
  // console.log(isDesktop);
  return (
    <div>
      {isDesktop ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#000000",
              height: 100,
              color: "black",
              justifyContent: "center",
            }}
          >
            <div
              className="text-white p-3 d-flex flex-row justify-content-between align-items-center fs-5
   flex-wrap justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between flex-sm-wrap gap-3"
            >
              <div className="d-flex flex-row justify-content-center text-white-50">
                Copyrights ©, All Rights Reserved, 2023 |{" "}
                <span className="text-white ps-3 fs-5"> Sathiyapramod</span>
              </div>
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
                  <LinkedInIcon fontSize="medium" color="inherit" />
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
          </AppBar>
        </Box>
      ) : (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#000000",
                height: 120,
                color: "black",
                justifyContent: "center",
              }}
            >
              <div className="text-secondary-emphasis fs-5 d-flex flex-column gap-2 justify-content-center align-items-center">
                <span className="d-flex flex-wrap">
                  Copyrights ©, All Rights Reserved, 2023 | Sathiyapramod
                </span>
                <span className="d-flex flex-row justify-content-center align-items-center gap-3 pb-3">
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
                    <LinkedInIcon fontSize="medium" color="inherit" />
                  </a>
                  <a
                    href="https://twitter.com/Sathiyapramod"
                    target="_blank"
                    rel="noreferrer"
                    style={externalLinks}
                  >
                    <TwitterIcon fontSize="medium" />
                  </a>
                </span>
              </div>
            </AppBar>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Footer;
