import { Typography } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div>
      <div className="content">
        <Fade>
          <Typography variant="h4">WELCOME</Typography>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
