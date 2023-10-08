import styled from "styled-components";
import img1small from "../assets/image-product-1-thumbnail.jpg";
import remove from "../assets/icon-delete.svg";

const Cart = ({
  showCart,
  saveCount,
  setSaveCount,
}: {
  showCart: boolean;
  saveCount: number;
  setSaveCount: (saveCount: number) => void;
}) => {
  return (
    <Div>
      {showCart && (
        <>
          <h3>Cart</h3>
          <hr />
          {saveCount > 0 ? (
            <aside>
              <div className="parentDiv">
                <img
                  className="product"
                  src={img1small}
                  alt="product 1 thumbnail"
                />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {saveCount} <span>${125 * saveCount}.00</span>
                  </p>
                </div>
                <img
                  onClick={() => setSaveCount(0)}
                  className="remove"
                  src={remove}
                  alt="delete icon"
                />
              </div>
              <button onClick={() => setSaveCount(0)}>Checkout</button>
            </aside>
          ) : (
            <h2>Your cart is empty.</h2>
          )}
        </>
      )}
    </Div>
  );
};

export default Cart;

const Div = styled.div`
  position: absolute;
  z-index: 5;
  right: 0.8rem;
  top: 1rem;
  padding: 2.7rem 0 3.4rem 0;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 0.1);
  max-width: 36rem;
  height: 25.7rem;
  .parentDiv {
    display: flex;
    align-items: center;
    gap: 1.65rem;
    p {
      color: #000;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
  aside {
    padding: 0 2.4rem;
  }
  h3 {
    color: #1d2025;
    font-size: 1.5rem;
    line-height: 1.4rem;
    padding: 0 2.4rem;
  }
  button {
    font-size: 1.6rem;
    color: #fff;
    background-color: #ff7d1a;
    width: 100%;
    padding: 1.7rem 7.7rem;
    margin-top: 2.8rem;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0px 8px 10px 0px #ffede0;
    cursor: pointer;
  }
  .product {
    border-radius: 0.4rem;
    width: 5rem;
    height: auto;
  }
  .remove {
    width: 1.4rem;
    height: 1.6rem;
    cursor: pointer;
  }
  hr {
    margin: 2.81rem 0 2.5rem 0;
    opacity: 0.2;
  }
  h2 {
    color: #68707d;
    font-size: 1.5rem;
    line-height: 1.1rem;
    letter-spacing: 0.06rem;
    padding: 5rem 10.8rem;
  }
  span {
    font-weight: 700;
  }

  @media (min-width: 1200px) {
    top: -12rem;
  }
`;
