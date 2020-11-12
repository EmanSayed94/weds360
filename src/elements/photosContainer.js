import styled from 'styled-components'

export const PhotoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  @media only screen and (max-device-width: 768px) {
    width: 100%;
  }
`
export const PhotoSectionContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
