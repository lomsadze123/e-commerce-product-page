import styled from "styled-components";
import img1Big from "../assets/image-product-1.jpg";
import img1small from "../assets/image-product-1-thumbnail.jpg";
import img2Big from "../assets/image-product-2.jpg";
import img2small from "../assets/image-product-2-thumbnail.jpg";
import img3Big from "../assets/image-product-3.jpg";
import img3small from "../assets/image-product-3-thumbnail.jpg";
import img4Big from "../assets/image-product-4.jpg";
import img4small from "../assets/image-product-4-thumbnail.jpg";
import previous from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";

const Images = () => {
  return (
    <Div>
      <span className="parent">
        <img src={img1Big} alt="various images" />
        {/* <img src={img2Big} alt="various images" />
        <img src={img3Big} alt="various images" />
        <img src={img4Big} alt="various images" /> */}
        <span>
          <img src={img1small} alt="various images" />
          <img src={img2small} alt="various images" />
          <img src={img3small} alt="various images" />
          <img src={img4small} alt="various images" />
        </span>
      </span>
      {/* <article>
        <div>
          <img src={previous} alt="previous icon" />
        </div>
        <div>
          <img src={next} alt="next icon" />
        </div>
      </article> */}
    </Div>
  );
};

export default Images;

const Div = styled.div`
  position: relative;
  img {
    max-width: 37.5rem;
    width: 100%;
    height: auto;
  }
  article img {
    width: 1.1rem;
    height: 1.51rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 4.5rem;
    background-color: white;
    border-radius: 50%;
  }
  article {
    padding: 0 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span span {
    display: none;
  }

  @media (min-width: 1200px) {
    img {
      max-width: 44.5rem;
      border-radius: 1.5rem;
      cursor: pointer;
    }
    .parent {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    span span {
      display: flex;
      justify-content: space-between;
    }
    span span img {
      max-width: 9.2rem;
      border-radius: 1.2rem;
      transition: opacity 0.4s ease-out;
    }
    span span img:hover {
      opacity: 0.5;
    }
  }
`;
