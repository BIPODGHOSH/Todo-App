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
  min-width: 340px;
  display: flex;

  justify-content: space-between;
`;

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
          <Box>
            <Button
              variant="contained"
              style={{ minHeight: 55 }}
              onClick={() => setInput(true)}
            >
              Add Task
            </Button>
          </Box>
          <Box>
            <FormControl sx={{ m: 0, minWidth: 120 }}>
              <Select
                value={status}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ backgroundColor: "white" }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Incomplete">Incomplete</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Header>
      </Container>
      {input && (
        <InputBox isOpen={input} closeInput={closeInput} addTodo={addTodo} />
      )}
      <TodoList todos={todos} setTodos={setTodos} isShow={status} />
    </>
  );
};

export default Home;
