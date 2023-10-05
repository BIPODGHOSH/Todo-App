import React, { useState } from "react";
import {
  Button,
  Box,
  styled,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import TodoList from "./TodoList";
import InputBox from "./InputBox";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 20px;
`;

const Header = styled(Box)`
  width: 60vw;
  display: flex;
  justify-content: space-between;
`;

const initialTodos = {
  task: "",
  todoStatus: "",
};

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(false);
  const [status, setStatus] = useState("All");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const closeInput = () => {
    setInput(false);
  };
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    closeInput();
  };
  return (
    <>
      <Container>
        <Header>
          <Button variant="contained" onClick={() => setInput(true)}>
            Add Task
          </Button>

          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <Select
              value={status}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Incomplete">Incomplete</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Header>
      </Container>
      {input && (
        <InputBox isOpen={input} closeInput={closeInput} addTodo={addTodo} />
      )}
      <TodoList todos={todos} />
    </>
  );
};

export default Home;
