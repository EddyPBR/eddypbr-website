import styled, { keyframes, css } from "styled-components";

type CarouselProps = {
  animateNext?: boolean;
  animatePrev?: boolean;
}

const rollUp = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -23rem, 0);
  }
`

const rollDown = keyframes`
  from {
    transform: translate3d(0, -23rem, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0.24;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.24;
  }
`

export const Blogs = styled.aside`
  max-width: 27rem;
  width: 100%;
  max-height: 72rem;
  height: 100%;
  /* position: absolute; */
  /* top: 12rem; */
  /* margin-left: 87rem; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Carousel = styled.div<CarouselProps>`
  max-height: 66rem;

  animation: ${(props) => props.animateNext === true ? css`${rollUp} 1s forwards` : ""};
  animation: ${(props) => props.animatePrev === true ? css`${rollDown} 1s forwards` : ""};

  transform: ${(props) => props.animatePrev === true ? "translate3d(0, -23rem, 0);" : ""};
  
  > article {
    margin-bottom: 4rem;

    &:hover > div {
      display: ${(props) => props.animatePrev === true || props.animateNext ? "none" : ""};
    }
  }

  ${(props) => props.animateNext === true || props.animatePrev === true
    ? (
      css`
        > article:not(:nth-child(-n + 4)) {
          opacity: 0;
        }
      `
    )
    : (
      css`
        > article:not(:nth-child(-n + 3)) {
          opacity: 0;
        }
      `
    )
  }

  > article:not(:nth-child(1)) {
    & > img {
      opacity: .24;
    }
    
    &:hover > div {
      display: none;
    }
  }

  > article:nth-child(1) {
    img {
      animation: ${(props) => props.animatePrev  === true ? css`${fadeIn} 1s forwards` : ""};
    }
  }

  > article:nth-child(2) {
    img {
      animation: ${(props) => props.animateNext  === true ? css`${fadeIn} 1s forwards` : ""};
      animation: ${(props) => props.animatePrev  === true ? css`${fadeOut} 1s forwards` : ""};
    }
  }
`;

export const Controlls = styled.div`
  position: absolute;
  height: 26rem;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: right;
  margin-top: -46.8rem;

  > button {
    width: 3.2rem;
    z-index: 10;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: filter .2s, transform .2s;

    &:hover {
      filter: brightness(1.2);
      transform: scale(1.08);
    }

    svg {
      font-size: 3.2rem;
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;
