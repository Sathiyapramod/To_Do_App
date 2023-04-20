import React from "react";

function EditOptions({ task }) {
  return (
    <div
      className="modal fade"
      id="editTask"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Task
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-floating">
              <input
                className="form-control"
                defaultValue={task.task}
                id="floatingTextarea2"
              />
              <label htmlFor="floatingTextarea2">Task</label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Go Back
            </button>
            <button type="button" className="btn btn-primary">
              Update changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditOptions;
