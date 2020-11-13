import styled from 'styled-components'

export const MainSliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NextImageContainer = styled.div`
  margin-top: 8rem;
  /* width: 10rem; */

  height: 25rem;
  position: relative;
  img {
    max-width: 100%;
    max-height: 100%;
    /* object-fit: cover; */
    /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); */
    filter: blur(5px);
    /* -webkit-filter: blur(8px); */
  }
`
export const SliderArrow = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  color: white;

  font-size: 2.5rem;
`
