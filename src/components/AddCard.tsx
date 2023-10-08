import { useState } from "react";
import styled from "styled-components";

const AddCard = ({
  setSaveCount,
}: {
  setSaveCount: (saveCount: number) => void;
}) => {
  const [count, setCount] = useState(0);

  return (
    <Div>
      <div>
        <button
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button
        onClick={() => {
          setSaveCount(count);
          setCount(0);
        }}
        className="btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
        >
          <g clipPath="url(#clip0_313_91)">
            <path
              d="M16.6695 3.08621H3.48525L3.28975 0.903251C3.2743 0.73094 3.19491 0.570655 3.06719 0.453954C2.93948 0.337253 2.77271 0.272594 2.5997 0.272705H1.19334C1.00971 0.272705 0.833609 0.34565 0.703765 0.475494C0.573922 0.605337 0.500977 0.781443 0.500977 0.965069C0.500977 1.1487 0.573922 1.3248 0.703765 1.45464C0.833609 1.58449 1.00971 1.65743 1.19334 1.65743H1.96607L2.76275 10.5307C2.81916 11.1705 3.16457 11.8644 3.76034 12.3358C2.68702 13.7066 3.66761 15.7273 5.41398 15.7273C6.86284 15.7273 7.88438 14.2823 7.38752 12.913H11.1777C10.6817 14.2807 11.7009 15.7273 13.1521 15.7273C13.7087 15.7266 14.2424 15.5052 14.636 15.1116C15.0296 14.718 15.251 14.1844 15.2516 13.6278C15.251 13.0711 15.0296 12.5375 14.636 12.1439C14.2424 11.7503 13.7087 11.5289 13.1521 11.5283H5.41861C4.89239 11.5283 4.43416 11.2114 4.23634 10.7486L15.3026 10.0979C15.4498 10.0893 15.5904 10.034 15.704 9.93986C15.8175 9.84577 15.8981 9.71786 15.9339 9.5748L17.341 3.94702C17.3665 3.84488 17.3684 3.73827 17.3465 3.6353C17.3246 3.53232 17.2796 3.43568 17.2148 3.35271C17.15 3.26974 17.0671 3.20262 16.9725 3.15645C16.8779 3.11027 16.774 3.08625 16.6687 3.08621H16.6695ZM5.4132 14.3425C5.22938 14.334 5.05592 14.2549 4.92886 14.1218C4.8018 13.9887 4.7309 13.8118 4.7309 13.6278C4.7309 13.4437 4.8018 13.2668 4.92886 13.1337C5.05592 13.0006 5.22938 12.9215 5.4132 12.913C5.59702 12.9215 5.77048 13.0006 5.89755 13.1337C6.02461 13.2668 6.0955 13.4437 6.0955 13.6278C6.0955 13.8118 6.02461 13.9887 5.89755 14.1218C5.77048 14.2549 5.59702 14.334 5.4132 14.3425ZM13.1521 14.3425C12.9682 14.334 12.7948 14.2549 12.6677 14.1218C12.5407 13.9887 12.4698 13.8118 12.4698 13.6278C12.4698 13.4437 12.5407 13.2668 12.6677 13.1337C12.7948 13.0006 12.9682 12.9215 13.1521 12.913C13.3359 12.9215 13.5093 13.0006 13.6364 13.1337C13.7635 13.2668 13.8344 13.4437 13.8344 13.6278C13.8344 13.8118 13.7635 13.9887 13.6364 14.1218C13.5093 14.2549 13.3359 14.334 13.1521 14.3425ZM14.7137 8.74566L4.05011 9.37157L3.60966 4.47171H15.7824L14.7137 8.74489V8.74566Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_313_91">
              <rect
                width="17"
                height="15.4545"
                fill="white"
                transform="translate(0.5 0.272705)"
              />
            </clipPath>
          </defs>
        </svg>
        <h3>Add to cart</h3>
      </button>
    </Div>
  );
};

export default AddCard;

const Div = styled.div`
  div {
    padding: 1rem 2.4rem;
    background-color: #f7f8fd;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    border: 0;
    border-radius: 1rem;
    background-color: #ff7d1a;
    color: #fff;
    box-shadow: 0px 8px 10px 0px #ffede0;
    padding: 1.7rem 7.7rem;
    font-size: 1.6rem;
    margin-top: 1.7rem;
  }
  svg {
    width: 1.7rem;
    height: auto;
  }
  p {
    color: #000;
    font-size: 1.6rem;
    letter-spacing: 0.128rem;
  }
  div button {
    border: 0;
    background-color: transparent;
    color: #ff7e1b;
    font-size: 2.7rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    .btn {
      max-width: 27.3rem;
      padding: 1.7rem 0;
      margin: 0;
      cursor: pointer;
      transition: opacity 0.4s ease-out;
    }
    div {
      padding: 1rem 1.6rem;
    }
    p {
      padding: 0 5rem;
    }
    div button {
      font-size: 3rem;
      cursor: pointer;
    }
    .btn:hover {
      opacity: 0.8;
    }
  }
`;
