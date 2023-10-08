import styled from "styled-components";
import Header from "./components/Header";
import Images from "./components/Images";
import Info from "./components/Info";
import AddCard from "./components/AddCard";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [press, setPress] = useState(false);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [showCart, setShowCart] = useState(false);
  const [saveCount, setSaveCount] = useState(0);

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
      <div className="relative">
        <Header
          width={width}
          setShowCart={setShowCart}
          showCart={showCart}
          saveCount={saveCount}
        />
        <Cart
          showCart={showCart}
          saveCount={saveCount}
          setSaveCount={setSaveCount}
        />
      </div>
      <span className="span">
        <Images
          width={width}
          setPress={setPress}
          press={false}
          setImgIndex={setImgIndex}
          imgIndex={imgIndex}
        />
        {press && width > 1200 && (
          <div className="absolute">
            <svg
              onClick={() => setPress(false)}
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#FF7D1A"
                fillRule="evenodd"
              />
            </svg>
            <Images
              width={1201}
              setPress={setPress}
              press={true}
              setImgIndex={setImgIndex}
              imgIndex={imgIndex}
            />
          </div>
        )}
        <section>
          <Info />
          <AddCard setSaveCount={setSaveCount} />
        </section>
      </span>
    </Body>
  );
}

export default App;

const Body = styled.div`
  max-width: 66.8rem;
  min-height: 100vh;
  margin: 0 auto;

  .span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }
  .relative {
    position: relative;
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
    .absolute {
      background-color: rgba(0, 0, 0, 0.75);
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 3;
      .bigImage {
        max-width: 55rem;
      }
      span span {
        justify-content: space-evenly;
        img:hover {
          opacity: 1;
        }
      }
      article {
        margin-bottom: 10rem;
        div {
          width: 5.5rem;
          height: 5.5rem;
          margin-left: -3.5rem;
          margin-right: -3.5rem;
          cursor: pointer;
        }
        img {
          width: 1.5rem;
          height: 1.91rem;
        }
      }
    }
    .absolute svg {
      transform: scale(1.6);
      margin: 0 0 2.8rem 53rem;
      cursor: pointer;
    }
  }
`;
