import menu from "../assets/icon-menu.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <div>
        <img className="menu" src={menu} alt="burger menu bar" />
        <h1>sneakers</h1>
      </div>
      <ul></ul>
      <div className="right">
        <img className="cart" src={cart} alt="cart icon" />
        <img className="avatar" src={avatar} alt="avatar icon" />
      </div>
    </HeaderDiv>
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
  }
  .avatar {
    width: 2.4rem;
  }
`;
