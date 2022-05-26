import "./App.css";
import Navbar from "./Navigation/Navbar";
import styled from "styled-components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Title>What Movie Should We Watch?</Title>  
    </div>
  );
}

const Title = styled.header`
display: flex;
align-items: center;
justify-content: center;
font-size: calc(8vw + 8vh + 4vmin);
line-height: .7;
color: white;
text-transform: lowercase;
font-family: Baskerville;
text-align: left;
`