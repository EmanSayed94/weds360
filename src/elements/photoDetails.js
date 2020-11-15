import styled from 'styled-components'

export const PhotoDetailsContainer = styled.div`
  display: flex;
  /* width: 100%; */
  flex-wrap: wrap;
  margin-top: 5rem;

  @media only screen and (max-device-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 90%;
    }
  }
`
export const DetailsImage = styled.div`
  width: 50%;
`
export const ImageDescription = styled.div`
  width: 20%;
  font-size: 1.6rem;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-device-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.2rem;
    height: 150px;
    div {
      font-size: 1.6rem;
      width: 20%;
    }
  }
`
export const SocialMediaIcons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  font-size: 2.2rem;
  margin-top: 1rem;
  @media only screen and (max-device-width: 425px) {
    justify-self: center;
    width: 100%;
    /* display: flex;
    justify-content: center; */
  }
`
