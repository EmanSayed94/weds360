import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { DropDownItemLink, NavDropdown } from './navDropdown'
// const secondary = #024d4c

export const HeaderContainer = styled.header`
  /* display: flex; */
  @media only screen and (max-device-width: 768px) {
    display: flex;
  }
`
export const LanguageSwitch = styled.div`
  /* padding: 1rem; */
  margin-left: 2.5rem;
  display: flex;
  /* justify-content: space-evenly; */
  font-weight: bold;
  height: 3rem;
  @media only screen and (max-device-width: 768px) {
    margin-left: 0rem;
    height: 2rem;
  }
`
export const UserIcon = styled(Link)`
  padding: 1 2rem;
  font-size: 1.5rem;
  color: #024d4c;
`
export const Language = styled(Link)`
  margin-left: 1rem;

  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  border-right: 1px solid black;
  border-left: 1px solid black;
  color: #024d4c;
`
export const Nav = styled.nav`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-family: 'Lato', sans-serif; */
  height: 60px;
  @media only screen and (max-device-width: 768px) {
    height: 4rem;
    justify-content: center;
    /* width: max-content; */
    width: 80%;
  }
`
export const NavBar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 42%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 1.34rem;
  padding: 1rem;

  li {
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
    display: block;
    padding: 9px 15px;
    &:hover {
      cursor: pointer;
      ${NavDropdown} {
        display: block;
      }
    }
  }

  @media only screen and (max-device-width: 768px) {
    display: none;
  }
`
export const NavLogo = styled(Link)`
  /* width: 3rem; */
  /* height: 2rem; */
  width: 10%;
  height: 13rem;
  text-align: center;
  @media only screen and (max-device-width: 768px) {
    height: 50px;
    width: 4rem;
  }
`
export const BurgerIcon = styled.div`
  display: none;
  color: black;
  /* width: 22px;
  height: 20px; */
  font-size: 2rem;
  @media only screen and (max-device-width: 768px) {
    display: block;
  }
`
