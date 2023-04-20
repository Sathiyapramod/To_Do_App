import React, { useState } from "react";
import { TextField } from "@mui/material";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import logo from "../assets/Sathiya.png";

function Appbar() {
  const [mode, setMode] = useState(true);
  const themeChange = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  const isDesktop = useMediaQuery("(min-Width : 768px)");
  const [isMenuToggled, setMenuToggled] = useState(false);

  return (
    <div>
      {isDesktop ? (
        <div className="navbar">
          <div className="logo"></div>
          <div className="menu-items">
            {["HOME", "ABOUT", "PROJECT", "CONTACT"].map((element, index) => {
              return (
                <a
                  href={element}
                  key={index}
                  rel="noreferrer"
                  className="menu-links"
                >
                  {element}
                </a>
              );
            })}
          </div>
          <div className="search-bar">
            <TextField id="search-bar" variant="standard" />
            <Button variant="text">
              <SearchOffOutlinedIcon />
            </Button>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="logo">
            <img src={logo} width="50" height="50" alt="logo" />
          </div>
          <div className="menu-toggled">
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => {
                setMenuToggled(!isMenuToggled);
              }}
            >
              <MenuOpenOutlinedIcon />
            </Button>
          </div>
        </div>
      )}
      {!isDesktop && isMenuToggled && (
        <div className="toggled-menu">
          <Box>
            <div className="corner-button">
              <Button
                variant="outlined"
                onClick={() => {
                  setMenuToggled(!isMenuToggled);
                }}
                color="inherit"
              >
                <CloseOutlinedIcon />
              </Button>
            </div>
            <div className="toggled-menu-lists">
              {["HOME", "ABOUT", "PROJECT", "CONTACT"].map((element, index) => {
                return (
                  <div key={index} className="menu-links">
                    <a href={element} rel="noreferrer" className="menu-links">
                      {element}
                    </a>
                  </div>
                );
              })}
            </div>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Appbar;
