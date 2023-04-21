import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { backendAPI } from "./General";
import EditOptions from "./EditOptions";
import Pagination from "@mui/material/Pagination";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setList] = useState([]);
  const [defaultTask, setTask] = useState({});
  const [page, setPage] = useState(1);
  const cardColors = ["#feff9c", "#7afcff", "#FBD489", "#E5CAAF"];

  const handlePageChange = (event, page) => {
    setPage(page);
    let startIndex = (page - 1) * 5;
    let endIndex = startIndex + 5;
    fetch(`${backendAPI}/lists`)
      .then((response) => response.json())
      .then((result) => {
        setList(result.slice(startIndex, endIndex));
        console.log(startIndex, endIndex);
      });
  };

  return (
    <div className="final-content">
      <span className="fs-1 fw-bold ">WELCOME , USER </span>
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
      <div className="">
        {toDoList && (
          <div className="container d-flex flex-row justify-content-center align-items-center gap-5 flex-wrap final-content">
            {toDoList.map((task, index) => {
              return (
                <div
                  className="card task-card bg-lighter shadow rounded-2"
                  key={index}
                >
                  <span className="card-header">
                    <span className="d-flex flex-row justify-content-between align-items-center">
                      <button
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#editTask"
                        onClick={() => {
                          setTask(task);
                        }}
                      >
                        <BorderColorIcon />
                      </button>
                      <EditOptions task={defaultTask} />
                      <button className="btn">
                        <RestoreFromTrashIcon />
                      </button>
                    </span>
                  </span>
                  <div className="card-body fs-4">{task.task}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <br />
      <Pagination
        color="primary"
        className="d-flex flex-row justify-content-center container"
        count={5}
        defaultPage={1}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default ToDoList;
