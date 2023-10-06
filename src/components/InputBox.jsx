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
    background-color: var(--gray-1);
    height: 50vh;
    width: 50vw;
    border-radius: 10px;
  }
`;

const TextArea = styled(TextField)`
  width: 40vw;
  background-color: var(--white);
  border-radius: 10px;
`;

const FormContainer = styled(FormControl)`
  width: 40vw;
  background-color: var(--white);
  border-radius: 10px;
  border: none;
`;

const InputBox = ({ isOpen, closeInput, addTodo }) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const handleTodos = () => {
    if (task.trim() === "" || status.trim() === "") {
      return;
    }
    const newTodo = {
      task: task,
      status: status,
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
      <DialogContent>
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
      <DialogActions>
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
