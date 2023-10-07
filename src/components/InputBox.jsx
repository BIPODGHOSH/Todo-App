import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

import { styled } from "@mui/system"; // Import styled from @mui/system

// Define a styled Dialog component
const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-1);
    height: 50vh;
    width: 50vw;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 80vw;
    }
  }
`;

const TextArea = styled(TextField)`
  width: 40vw;
  background-color: var(--white);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 65vw;
  }
`;

const FormContainer = styled(FormControl)`
  width: 40vw;
  background-color: var(--white);
  border-radius: 10px;
  border: none;
  @media (max-width: 768px) {
    width: 65vw;
  }
`;

const InputBox = ({ isOpen, closeInput, addTodo }) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString().substr(-2);

  const formattedDate = `${day}/${month}/${year}`;

  const handleTodos = () => {
    if (task.trim() === "" || status.trim() === "") {
      return;
    }
    const newTodo = {
      task: task,
      status: status,
      date: formattedDate,
    };

    addTodo(newTodo);
  };

  const handleClose = () => {
    setTask("");
    setStatus("");
    closeInput();
  };

  return (
    <StyledDialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="title">Title</label>
        <TextArea
          autoFocus
          margin="dense"
          onChange={(e) => setTask(e.target.value)}
          id="title"
          type="text"
          fullWidth
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />

        <Typography>Status</Typography>
        <FormContainer>
          <Select
            value={status}
            displayEmpty
            onChange={(e) => setStatus(e.target.value)}
            inputProps={{
              "aria-label": "Without label",
            }}
          >
            <MenuItem value="Incomplete">Incomplete</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormContainer>
      </DialogContent>
      <DialogActions
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Button variant="contained" onClick={handleTodos}>
          Add Task
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default InputBox;
