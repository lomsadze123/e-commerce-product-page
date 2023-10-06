import styled from "styled-components";
import img1Big from "../assets/image-product-1.jpg";
import previous from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";

const Images = () => {
  return (
    <Div>
      <img src={img1Big} alt="various images" />
      <article>
        <div>
          <img src={previous} alt="previous icon" />
        </div>
        <div>
          <img src={next} alt="next icon" />
        </div>
      </article>
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
`;
