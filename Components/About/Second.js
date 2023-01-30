import React from "react";
import styled from "styled-components";
import Image from "next/image";
function Second() {
  return (
    <Container>
      <HeaderDivider>
        <h1>Evolve your industry 4.0 strategy with computer vision and AI.</h1>
      </HeaderDivider>
      <BodyDivider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
          nibh, varius et viverra vitae, rutrum ut diam. Nullam ex nisl, mattis
          bibendum mollis ac, imperdiet ut mauris. Integer commodo euismod nibh
          vel varius. Maecenas consectetur scelerisque convallis. Phasellus
          molestie faucibus enim. Donec sit amet dictum magna. Mauris ac
          sagittis nulla. Curabitur ut tristique sapien, sit amet egestas magna.
          Duis ornare bibendum tellus. Integer ac lacus ut nisi ultrices
          molestie. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Integer aliquet eget ligula ut
          tincidunt. Nulla diam sapien, porttitor at fringilla sed, congue sed
          felis. Phasellus sapien nunc, luctus ac vulputate quis, venenatis
          vitae tortor.
        </p>

        <p>
          Nunc bibendum tortor eros, at fermentum nisi volutpat eu. Maecenas
          faucibus tortor at mi ultrices, vitae pretium mauris vehicula.
          Vestibulum erat eros, consequat vel tristique vitae, molestie tempus
          tortor. Nunc a tempor magna. Quisque in tincidunt leo, et molestie
          augue. Integer tempor bibendum massa. Sed scelerisque commodo tempus.
          Curabitur nulla ipsum, malesuada in accumsan ac, vulputate nec neque.
          Sed tempor neque eu neque sodales venenatis. In hac habitasse platea
          dictumst. Cras imperdiet, augue at faucibus consectetur, ipsum velit
          porta turpis, quis lobortis arcu lectus ac erat. Proin sed consequat
          dui. Pellentesque consectetur dui libero, vel euismod tellus tristique
          non. Donec mollis interdum enim sed eleifend. Curabitur ut massa quis
          lorem finibus dignissim. Duis laoreet varius odio, non iaculis nunc
          rhoncus non.
        </p>

        <p>
          Cras sed nunc lacus. Etiam ante odio, faucibus nec ante sed, mattis
          rutrum mi. Proin eget ex sed quam blandit vulputate. Ut semper nec
          purus et laoreet. Curabitur placerat mauris sit amet lectus malesuada,
          id congue ante tempus. Nulla quis bibendum arcu, nec interdum nibh.
          Nullam feugiat sem ut tincidunt porttitor.
        </p>

        <p>
          Duis nibh dolor, tempus non malesuada vel, hendrerit in metus. Donec
          in blandit turpis. Etiam tincidunt eros in dolor tincidunt, quis
          porttitor ex consectetur. In non nisl tristique diam vehicula
          tincidunt. Etiam at fermentum ligula, ac fermentum eros. Aliquam quis
          nisi accumsan, sollicitudin felis eu, sagittis mauris. Nam blandit sed
          nisi sit amet vestibulum. Aliquam eget rhoncus risus, blandit iaculis
          enim. Proin ac iaculis neque, eu tempus arcu.
        </p>

        <p>
          Quisque eu sapien augue. Phasellus nulla orci, finibus a egestas et,
          fringilla a nunc. Praesent lacinia at mauris ac elementum. Nullam
          rhoncus ultricies odio et commodo. Donec gravida, quam a sagittis
          facilisis, lorem augue maximus libero, a suscipit velit magna sit amet
          nulla. Phasellus elementum tempus lectus eu aliquet. In hac habitasse
          platea dictumst. Curabitur commodo lacus nec nulla eleifend posuere.
          In tellus ipsum, convallis eget ullamcorper sit amet, scelerisque in
          mauris. Donec quis fringilla felis, id dictum urna. Pellentesque
          dignissim eleifend nibh eu volutpat.
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
    font-size: 15px;
    font-weight: 400;
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
