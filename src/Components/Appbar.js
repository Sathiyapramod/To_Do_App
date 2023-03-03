import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import { Linkstyling } from "./General";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Switch from "@mui/material/Switch";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "../hooks/useMediaQuery";

function Appbar() {
  const [mode, setMode] = useState(true);
  const themeChange = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-Width : 768px)");
  console.log(isDesktop);
  return (
    <ThemeProvider theme={themeChange}>
      {isDesktop ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: mode ? "navy" : "dark" }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={Linkstyling}>
                  To Do App
                </Link>
              </Typography>
              <Button color="inherit">HOME</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Content</Button>
              <WbSunnyIcon />
              <Button color="inherit">
                <Switch onClick={() => setMode(!mode)} color="success" />
              </Button>
              <NightlightRoundIcon />
            </Toolbar>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: mode ? "navy" : "dark" }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={Linkstyling}>
                  To Do App
                </Link>
              </Typography>
              <Button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                color="inherit"
              >
                <WidgetsTwoToneIcon />
              </Button>
              {!isDesktop && isMenuToggled && (
                <Box sx={{ backgroundColor: mode ? "#ffab43" : "dark" }}>
                  <div className="popupmenubar position-fixed">
                    <Button
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                      color="inherit"
                      sx={{
                        position: "relative",
                        left: 50,
                        top: 5,
                      }}
                    >
                      <CloseIcon />
                    </Button>
                    <div className="d-flex flex-column align-items-start gap-3 justify-content-between mt-3 ps-3 pt-3">
                      <Button color="inherit" size="large">
                        HOME
                      </Button>
                      <Button color="inherit" size="large">
                        About
                      </Button>
                      <Button color="inherit" size="large">
                        Content
                      </Button>
                    </div>
                    <div className="d-flex flex-row align-items-center ps-4">
                      <WbSunnyIcon />
                      <Button color="inherit">
                        <Switch
                          onClick={() => setMode(!mode)}
                          color="success"
                        />
                      </Button>
                      <NightlightRoundIcon />
                    </div>
                  </div>
                </Box>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default Appbar;
