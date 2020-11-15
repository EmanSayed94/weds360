import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ImageCard = styled(Link)`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  width: 20rem;
  margin-bottom: 2rem;
  h3 {
    font-size: 1.7rem;
    padding-top: 1rem;
    color: black;
  }
  @media only screen and (max-device-width: 425px) {
    width: 90%;
    font-size: 1.2rem;
  }
  /* width: */
`
