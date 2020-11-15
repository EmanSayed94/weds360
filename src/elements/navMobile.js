import styled from 'styled-components'

export const NavMobileContainer = styled.div`
  display: none;
  @media only screen and (max-device-width: 768px) {
    background-image: url('./../images/background.jpg');
    display: block;
    width: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    font-family: monospace;
    position: absolute;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }
`
export const NavMobileItem = styled.div`
  @media only screen and (max-device-width: 768px) {
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    position: relative;
    border-bottom: 2px solid white;
    &:nth-child(odd) {
      border-right: 2px solid white;
    }
  }
`
export const NavMobileItemSmall = styled(NavMobileItem)`
  @media only screen and (max-device-width: 768px) {
    width: 25%;
    ${NavMobileItem};
    &:nth-child(even) {
      border-right: 2px solid white;
      &:last-child {
        border: none;
      }
    }
  }
`
