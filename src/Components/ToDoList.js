import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { DeleteStyling } from "./General";
import { backendAPI } from "./General";
import EditOptions from "./EditOptions";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setList] = useState([]);
  const [page, setPage] = useState(1);
  const cardColors = ["#feff9c", "#7afcff", "#FBD489", "#E5CAAF"];

  useEffect(() => {
    fetch(`${backendAPI}/lists`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setList(result);
      });
  }, []);
  return (
    <div className="final-content">
      <Typography variant="h3">WELCOME , USER </Typography>

      <div className="mx-auto d-flex flex-row justify-content-center align-items-center">
        <div className=" d-flex flex-row justify-content-center align-items-center col col-sm-4 col-md-6 col-lg-6 p-4">
          <input
            className="form-control"
            type="text"
            onChange={(event) => {
              event.preventDefault();
              setToDo(event.target.value);
            }}
          />
        </div>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => {
            setList([...toDoList, toDo]);
          }}
        >
          Add List
        </Button>
      </div>
      <div className="d-flex flex-row flex-wrap final-content">
        {toDoList
          ? toDoList.map((element, index) => {
              return (
                <Card
                  key={element._id}
                  elevation={12}
                  sx={{
                    width: 200,
                    height: 200,
                    fontSize: 20,
                    backgroundColor:
                      cardColors[
                        Math.floor(Math.random(1, cardColors.length - 1) * 10)
                      ],
                  }}
                  className="gap-2 m-3 p-3 rounded-2 word-wrap card"
                >
                  {element.task}
                  <Divider />
                  <span>
                    {/* <EditOptions value={element} index={index} /> */}
                    <Button
                      startIcon={<DeleteIcon />}
                      style={DeleteStyling}
                      onClick={() => {
                        alert("Are you Sure Want to Delete ?");
                      }}
                      color="info"
                    />
                  </span>
                </Card>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default ToDoList;
