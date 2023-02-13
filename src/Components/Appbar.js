import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Linkstyling } from "./General";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Switch from "@mui/material/Switch";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

function Appbar() {
  const [mode, setMode] = useState(true);
  const themeChange = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={themeChange}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={Linkstyling}>
                To Do App
              </Link>
            </Typography>
            <WbSunnyIcon />
            <Button color="inherit">
              <Switch onClick={() => setMode(!mode)} color='success'/>
            </Button>
            <NightlightRoundIcon />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Appbar;
