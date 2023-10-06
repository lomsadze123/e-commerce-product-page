import styled from "styled-components";
import Header from "./components/Header";
import Images from "./components/Images";
import Info from "./components/Info";

function App() {
  return (
    <Body>
      <Header />
      <Images />
      <section>
        <Info />
      </section>
    </Body>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
