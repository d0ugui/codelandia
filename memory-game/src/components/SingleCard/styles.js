import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  img {
    width: 100%;
    display: block;
    border-radius: 6px;
    background: #15181F;

    &.front {
      transform: rotateY(90deg);
      transition: all ease-in 0.2s;
      position: absolute;
    }

    &.back {
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
    }
  }
`

export const CardFlipped = styled.div`
  &.flipped {
    .front {
      transform: rotateY(0deg); 
      transition-delay: 0.2s;
    }
  }

  &.flipped {
    .back {
      transform: rotateY(90deg);
      transition-delay: 0;
    }
  }
`