import styled from "styled-components";

const Info = () => {
  return (
    <Div>
      <h3>Sneaker Company</h3>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div>
        <aside>
          <h2>$125.00</h2>
          <h4>50%</h4>
        </aside>
        <p>$250.00</p>
      </div>
    </Div>
  );
};

export default Info;

const Div = styled.div`
  padding: 0 0 2.8rem 0;
  h3 {
    color: #ff7d1a;
    font-size: 1.2rem;
    letter-spacing: 0.168rem;
    text-transform: uppercase;
  }
  h2 {
    color: #1d2025;
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin: 1.4rem 0 1.6rem 0;
  }
  p {
    color: #68707d;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.5rem;
    letter-spacing: 0.056rem;
  }
  div,
  aside {
    display: flex;
    align-items: center;
  }
  div {
    margin: 3rem 0 0;
    justify-content: space-between;
  }
  aside {
    gap: 2.6rem;
  }
  div h2 {
    font-size: 3rem;
    line-height: 2.6rem;
    margin: 0;
  }
  h4 {
    color: #ff7d1a;
    font-size: 1.6rem;
    line-height: 2.6rem;
    background-color: #ffede0;
    padding: 0 0.9rem;
    border-radius: 0.5rem;
  }
  div p {
    color: #1d2025;
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 700;
    letter-spacing: 0.048rem;
    text-decoration: line-through;
  }

  @media (min-width: 1200px) {
    padding: 0 0 3.4rem 0;
    h3 {
      font-size: 1.4rem;
      letter-spacing: 0.112rem;
    }
    h2 {
      font-size: 4.4rem;
      line-height: 4.8rem;
      max-width: 40rem;
      margin: 1.9rem 0 3.5rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 2.6rem;
      max-width: 46.4rem;
    }
    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
