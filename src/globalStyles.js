import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:sans-serif;

}
img {
  max-width: 100%;
  display: block;
}

`

export const Container = styled.div`
  /* max-width: 100rem; */
  width: 80%;
  margin: 0 auto;
  background-color: transparent;
  min-height: 95vh;
  margin-top: 3rem;
  text-align: center;
  /* padding: 0 5rem; */
  @media only screen and (max-device-width: 768px) {
    width: 100%;
    padding: 0 2rem;
  }
`
export default GlobalStyle
