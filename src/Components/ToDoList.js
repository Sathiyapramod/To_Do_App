import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { DeleteStyling, EditStyling } from "./General";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setList] = useState([]);
  const navigate = useNavigate();
  const cardColors = ["#feff9c", "#7afcff", "#FBD489", "#E5CAAF"];
  const rotAngle = ["10deg", "-10deg", "-12deg", "12deg"];
  const DeleteItem = (item) => {
    const newTodos = toDoList.filter((element) => {
      return element !== item;
    });
    setList(newTodos);
  };
  return (
    <div>
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
        <div className="d-flex flex-row flex-wrap">
          {toDoList.length > 0 && toDo !== "" && toDoList.length < 12 ? (
            toDoList.map((element, index) => {
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
                    <Button
                      style={EditStyling}
                      startIcon={<BorderColorRoundedIcon />}
                      onClick={() => {
                        navigate("/edit");
                      }}
                    />
                    <Button
                      startIcon={<DeleteIcon />}
                      style={DeleteStyling}
                      onClick={() => {
                        alert("Are you Sure Want to Delete ?");
                        DeleteItem(element);
                      }}
                    />
                  </span>
                </Card>
              );
            })
          ) : (
            <div className="mx-auto d-flex flex-row justify-content-center align-items-center">
              <Typography variant="h5"> 😊 No New Tasks made !!</Typography>
            </div>
          )}
          {toDoList.length > 8 ? setList([]) : ""}
        </div>
      </Fade>
    </div>
  );
}

export default ToDoList;