import styled from "styled-components";
import previous from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";
import { imgListBig, imgListSmall } from "./ListImages";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Images = ({
  width,
  setPress,
  press,
  setImgIndex,
  imgIndex,
}: {
  width: number;
  setPress: (press: boolean) => void;
  press: boolean;
  imgIndex: number;
  setImgIndex: (setImgIndex: number) => void;
}) => {
  const controls = useAnimation();

  const handleNext = () => {
    if (imgIndex < 3) {
      setImgIndex(imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  };
  console.log("das");

  const handlePrevious = () => {
    if (imgIndex === 0) {
      setImgIndex(3);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    controls.start("hidden");
    setTimeout(() => {
      controls.start("visible");
    }, 100);
  }, []);

  return (
    <Div>
      <span className="parent">
        {imgListBig.map(
          (img, index) =>
            index === imgIndex && (
              <motion.img
                onClick={() => setPress(true)}
                src={img}
                alt="various images"
                key={img}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                className="bigImage"
              />
            )
        )}
        {width > 1200 && (
          <span>
            {imgListSmall.map((img, index) => (
              <Figure key={img} opacity={imgIndex === index}>
                <Img
                  opacity={!press && imgIndex === index}
                  onClick={() => setImgIndex(index)}
                  src={img}
                  alt="various images"
                />
              </Figure>
            ))}
          </span>
        )}
      </span>
      {(width < 1200 || press) && (
        <article>
          <div onClick={handlePrevious}>
            <img src={previous} alt="previous icon" />
          </div>
          <div onClick={handleNext}>
            <img src={next} alt="next icon" />
          </div>
        </article>
      )}
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
      margin: -0.1rem 0 -0.3rem 0;
    }
    span span img:hover {
      opacity: 0.5;
    }
  }
`;
const Img = styled.img<{ opacity: boolean }>`
  opacity: ${(props) => (props.opacity ? 0.5 : 1)};
`;

const Figure = styled.figure<{ opacity: boolean }>`
  border: ${(props) => (props.opacity ? ".25rem solid #FF7D1A" : "")};
  border-radius: 1.2rem;
`;
