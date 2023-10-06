import { Box, styled, Checkbox, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { css } from "styled-components";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 15px 0;
  background-color: var(--bg-2);
  margin: auto;
  border-radius: 10px;
  min-height: 70px;
  min-width: 340px;
  width: 60vw;
`;

const EmptyTask = styled(Box)`
  background-color: var(--bg-3);
  height: 30px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: var(--white);
  margin: 10px 0 10px 0;
  padding: 10px;
  width: 50vw;
  min-width: 300px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const TaskWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Task = styled(Box)`
  min-width: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const Status = styled(Box)`
  background-color: ${(props) =>
    props.complete === "true" ? "#34d3d1" : "red"};
  padding: 10px;
  border-radius: 10px;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const TodoList = ({ todos, setTodos, isShow }) => {
  const handleCheck = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      status:
        updatedTodos[index].status === "Incomplete"
          ? "Completed"
          : "Incomplete",
    };
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (isShow === "All") {
      return true; // Show all todos
    } else if (isShow === "Incomplete" && todo.status === "Incomplete") {
      return true; // Show only Incomplete todos when isShow is "Incomplete"
    } else if (isShow === "Completed" && todo.status === "Completed") {
      return true; // Show only Completed todos when isShow is "Completed"
    }
    return false;
  });

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Container>
        {filteredTodos.length > 0 ? (
          <Component>
            {filteredTodos.map((todo, index) => (
              <Wrapper key={index}>
                <TaskWrapper>
                  <Checkbox
                    {...label}
                    checked={todo.status === "Completed"}
                    onClick={() => handleCheck(index)}
                  />
                  <Task>
                    <Typography>{todo.task}</Typography>
                  </Task>
                </TaskWrapper>
                <Task>
                  <Status
                    complete={todo.status === "Completed" ? "true" : "false"}
                  >
                    {todo.status}
                  </Status>
                  <DeleteIcon onClick={() => handleDelete(index)} />
                </Task>
              </Wrapper>
            ))}
          </Component>
        ) : (
          <EmptyTask>No Todo</EmptyTask>
        )}
      </Container>
    </>
  );
};

export default TodoList;
