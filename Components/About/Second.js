import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
function Second() {
  return (
    <Container>
      <HeaderDivider>
        <h1> Unleashing the potential of AI for modeling and simulations</h1>
      </HeaderDivider>
      <BodyDivider>
        <p>
          Our vision for the future of science is one where computational
          sciences play a crucial role in advancing fundamental sciences and
          engineering solutions to our most pressing challenges. We believe in
          the power of data-driven models learned through machine learning and
          specialized by domain knowledge to revolutionize the scientific
          method. This paradigm shift will enable domain scientists to formulate
          new research questions and find answers in innovative ways, ultimately
          leading to solutions for problems that we cannot currently solve. Our
          company is dedicated to accelerating this transition by bridging the
          gap between machine learning and its use in science. We strive to
          deepen our understanding of ML models so that we can use them as
          scientist co-pilots in pursuit of groundbreaking scientific
          discoveries. Join us in shaping the future of science.
        </p>

        <p>
          In particular, we are exploring the application of AI to drug
          discovery, leveraging the power of data-driven models and
          domain-specific knowledge to accelerate the process of drug design and
          optimization. Our team is dedicated to deepening our understanding of
          machine learning models and developing user-friendly tools that can be
          used by domain scientists to generate novel drug candidates and
          predict their properties. We believe that AI has the potential to
          revolutionize the field of drug discovery, and we are excited to be at
          the forefront of this transformation.
        </p>

        <p>
          Improvements in simulation and modeling with AI have the potential to
          greatly impact the semiconductor industry by accelerating the process
          of chip design and optimization. With the help of AI algorithms,
          engineers can quickly generate and test virtual prototypes of new chip
          designs, reducing the time and cost required for physical testing.
          Machine learning can also assist in the prediction of semiconductor
          properties, allowing for the optimization of chip performance and
          energy efficiency. By leveraging these technologies, semiconductor
          companies can stay at the forefront of innovation and rapidly bring
          new products to market. Overall, AI has the potential to transform the
          way that the semiconductor industry operates, streamlining the design
          and production process and ultimately driving progress in this
          critical field
        </p>
      </BodyDivider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  background: white;
  position: relative;
`;

const HeaderDivider = styled.div`
  width: 70%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: black;
  margin: 50px;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 0px;
    font-size: 48px;
    font-weight: 400;
    text-align: left;
    @media screen and (max-width: 1200px) {
      font-size: 32px;
    }
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
`;
const BodyDivider = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;
  color: black;
  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    align-items: center;
  }
  p {
    margin: 20px 0px 20px 0px;
    font-size: 18px;
    font-weight: 100;
    text-align: left;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export default Second;
