import React from "react";
import { useNavigate } from "react-router-dom";
import { EditStyling } from "./General";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { TextField, Typography } from "@mui/material";

function EditOptions({ value, editItem, index }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Button
        style={EditStyling}
        startIcon={<BorderColorRoundedIcon />}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">Edit Activity</Typography>
          <TextField
            rows={4}
            multiline
            name={value}
            id={value}
            defaultValue={value}
            onChange={(event) => {
              event.preventDefault();
              console.log(event.target.value, index);
            }}
          />
          <span className="d-flex flex-row justify-content-between align-items-center">
            <Button onClick={handleClose}>Update</Button>
          </span>
        </Box>
      </Modal>
    </div>
  );
}

export default EditOptions;
