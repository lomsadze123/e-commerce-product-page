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
        <h2>$125.00</h2>
        <h4>50%</h4>
        <p>$250.00</p>
      </div>
    </Div>
  );
};

export default Info;

const Div = styled.div`
  padding: 2.4rem 2.4rem 2.8rem 2.4rem;
`;
