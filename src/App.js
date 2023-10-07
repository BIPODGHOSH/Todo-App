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
  background-image: url("https://img1.picmix.com/output/stamp/normal/3/5/0/5/1715053_c6194.gif");
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
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
