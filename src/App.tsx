import styled from "styled-components";
import Header from "./components/Header";
import Images from "./components/Images";
import Info from "./components/Info";
import AddCard from "./components/AddCard";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    let timeOut: number;

    const debounce = () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(handleWidth, 10);
    };

    window.addEventListener("resize", debounce);

    return () => {
      window.removeEventListener("resize", debounce);
    };
  }, []);

  return (
    <Body>
      <Header width={width} />
      <span className="span">
        <Images />
        <section>
          <Info />
          <AddCard />
        </section>
      </span>
    </Body>
  );
}

export default App;

const Body = styled.div`
  max-width: 66.8rem;
  margin: 0 auto;
  position: relative;
  .span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  section {
    padding: 0 2.4rem;
  }

  @media (min-width: 1200px) {
    max-width: 111.1rem;
    .span {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 4rem;
    }
    section {
      padding: 0;
    }
  }
`;
