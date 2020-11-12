import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavDropdown = styled.div`
  box-sizing: border-box;
  height: max-content;
  /* min-width: max-content; */
  position: absolute;
  top: 2.8rem;
  z-index: 1000;
  box-shadow: 0 8px 16px 0 #d6cfcf;
  display: none;
  a {
    display: block;
  }
  a:not(:last-child) {
    border-bottom: 1px solid black;
  }
  &:hover {
    display: block;
  }
  @media only screen and (max-device-width: 768px) {
    display: none;
  }
`
export const DropDownItemLink = styled(Link)`
  display: block;
  padding: 2rem;
  color: black;
  font-weight: bold;
  text-transform: upper-case;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
  }
`
