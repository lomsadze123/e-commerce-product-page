import menu from "../assets/icon-menu.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import styled from "styled-components";
import close from "../assets/icon-close.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({
  width,
  setShowCart,
  showCart,
  saveCount,
}: {
  width: number;
  saveCount: number;
  setShowCart: (shotCart: boolean) => void;
  showCart: boolean;
}) => {
  const [hide, setHide] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <HeaderDiv>
        <div>
          {width < 1200 && (
            <img
              onClick={() => setHide(true)}
              className="menu"
              src={menu}
              alt="burger menu bar"
            />
          )}
          <h1>sneakers</h1>
          {(width > 1200 || hide) && (
            <nav>
              <AnimatePresence>
                {(width > 1200 || hide) && (
                  <motion.ul
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={variants}
                    className="container"
                  >
                    {width < 1200 && (
                      <img
                        onClick={() => setHide(false)}
                        src={close}
                        alt="close icon"
                      />
                    )}
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
          )}
        </div>
        <div className="right">
          <img
            onClick={() => setShowCart(!showCart)}
            className="cart"
            src={cart}
            alt="cart icon"
          />
          <img className="avatar" src={avatar} alt="avatar icon" />
          {saveCount > 0 && <p>{saveCount}</p>}
        </div>
      </HeaderDiv>
      {width > 1200 && <Hr />}
    </>
  );
};

export default Header;

const HeaderDiv = styled.header`
  width: 100%;
  padding: 1.4rem 2.4rem;
  h1 {
    color: #000;
    font-size: 3.1rem;
    letter-spacing: 0.124rem;
    padding: 0 0 1rem;
  }
  &,
  div {
    display: flex;
    align-items: center;
  }
  div {
    gap: 1.6rem;
  }
  .right {
    gap: 2.4rem;
    position: relative;
  }
  justify-content: space-between;
  img {
    width: 100%;
  }
  .menu {
    max-width: 1.6rem;
    height: auto;
  }
  .cart {
    width: 2.1rem;
    height: auto;
  }
  .avatar {
    width: 2.4rem;
    height: auto;
  }

  nav {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 6;
  }
  ul {
    color: #1d2025;
    list-style: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 40%;
    background-color: white;
    z-index: 2;
    padding: 2.4rem 0 0 2.5rem;
  }
  ul img {
    width: 1.4rem;
    height: auto;
    margin-bottom: 5.3rem;
  }
  li {
    font-size: 1.7rem;
    letter-spacing: 0.051rem;
    padding-bottom: 1.7rem;
  }
  p {
    background-color: #ff7d1a;
    padding: 0.1rem 0.7rem;
    border-radius: 0.9rem;
    color: #fff;
    position: absolute;
    top: -0.3rem;
    left: 1rem;
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    padding: 3.3rem 0 0;
    ul {
      display: flex;
      color: #68707d;
      align-items: center;
      gap: 3.2rem;
      padding: 0;
    }
    nav {
      background-color: white;
    }
    nav,
    ul {
      position: static;
    }
    li {
      font-size: 1.5rem;
      font-weight: 400;
      padding: 2rem 0 5rem 0;
      cursor: pointer;
      transition: box-shadow 0.4s ease-out;
    }
    li:hover {
      box-shadow: 0 0.4rem 0 #ff7d1a;
      color: #1d2025;
    }
    div {
      gap: 5.8rem;
    }

    h1 {
      padding: 0;
      padding-bottom: 3rem;
    }
    .cart {
      width: 2.2rem;
      cursor: pointer;
    }
    .avatar {
      width: 5rem;
    }
    .right {
      gap: 4.5rem;
      padding-bottom: 3rem;
    }
    p {
      top: 1rem;
    }
  }
`;
const Hr = styled.hr`
  opacity: 0.15;
  margin-bottom: 9.1rem;
`;
