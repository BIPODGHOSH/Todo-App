import "./App.css";
import Home from "./components/Home";
import { Box, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)`
  padding-top: 2%;
`;

const Heding = styled(Typography)`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Heding>Todo List</Heding>
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
