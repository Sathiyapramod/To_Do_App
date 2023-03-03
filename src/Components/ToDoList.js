import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { DeleteStyling } from "./General";
import EditOptions from "./EditOptions";
import { themeStyling } from "./General";
import PaginationResult from "./Pagination";
import { sampleTasks } from "./General";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setList] = useState([]);
  const cardColors = ["#feff9c", "#7afcff", "#FBD489", "#E5CAAF"];
  const rotAngle = ["10deg", "-10deg", "-12deg", "12deg"];

  const editItem = (item, index) => {
    toDoList[index] = item;
    setList([...toDoList]);
  };
  const DeleteItem = (item) => {
    const newTodos = toDoList.filter((element) => {
      return element !== item;
    });
    setList(newTodos);
  };

  const [page, setPage] = useState(1);

  const paginatedList = (index) => {
    setPage(index);
    //first 8 element = arr.slice(0,9)
    //second 8 elements = arr.slice(10,19)
    const newList = toDoList.slice((index - 1) * 10, index + 9);
    setList(newList);
  };

  return (
    <div style={themeStyling.content} className="final-content">
      <Fade text>
        <Typography variant="h3">WELCOME , USER </Typography>
      </Fade>
      <Fade left>
        <div className="mx-auto d-flex flex-row justify-content-center align-items-center">
          <div className=" d-flex flex-row justify-content-center align-items-center col col-sm-4 col-md-6 col-lg-6 p-4">
            <input
              className="form-control form-control-lg"
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
      </Fade>
      <Fade bottom>
        <div className="d-flex flex-row flex-wrap final-content">
          {toDoList.length > 0 && toDoList.length < 8
            ? toDoList.map((element, index) => {
                return (
                  <Card
                    key={index}
                    elevation={12}
                    sx={{
                      width: 200,
                      height: 200,
                      fontSize: 20,
                      backgroundColor:
                        cardColors[
                          Math.floor(Math.random(1, cardColors.length - 1) * 10)
                        ],
                      rotate:
                        rotAngle[
                          Math.floor(Math.random(1, rotAngle.length - 1) * 10)
                        ],
                    }}
                    className="gap-2 m-3 p-3 rounded-2 word-wrap card"
                  >
                    {element}
                    <Divider />
                    <span>
                      <EditOptions
                        value={element}
                        editItem={editItem}
                        index={index}
                      />
                      <Button
                        startIcon={<DeleteIcon />}
                        style={DeleteStyling}
                        onClick={() => {
                          alert("Are you Sure Want to Delete ?");
                          DeleteItem(element);
                        }}
                        color="info"
                      />
                    </span>
                  </Card>
                );
              })
            : ""}
        </div>
      </Fade>
    </div>
  );
}

export default ToDoList;
