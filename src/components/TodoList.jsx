import { Box, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-2);
  margin: auto;
  border-radius: 10px;
  min-height: 70px;
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

const TodoList = ({ todos }) => {
  console.log(todos);
  let len = todos.length;
  console.log(len);
  return (
    <>
      <Container>
        {len > 0 ? (
          <div>
            <h2>Todo List</h2>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  Task: {todo.task}, Status: {todo.status}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <EmptyTask>No Todo</EmptyTask>
        )}
      </Container>
    </>
  );
};

export default TodoList;
