import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: black;
  color: white;
  margin-top: 2rem;
  a {
    color: #337ab7;
  }

  @media only screen and (max-device-width: 768px) {
    /* padding: 0.5rem 1.5rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      margin-top: 0.7rem;
    }
  }
`
export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterIcons = styled.div`
  display: flex;
  font-size: 1.2rem;
  @media only screen and (max-device-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
// export const
export const FooterTerms = styled.div`
  display: block;
  width: 90px;
  text-align: center;
  margin: 1rem 0;
`
