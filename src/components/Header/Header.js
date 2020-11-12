import React from 'react'
import {
  HeaderContainer,
  Nav,
  LanguageSwitch,
  UserIcon,
  Language,
  NavBar,
  NavLogo,
  BurgerIcon,
} from '../../elements/header'
import { FaUserPlus } from 'react-icons/fa'
import { FiAlignJustify } from 'react-icons/fi'
import { DropDownItemLink, NavDropdown } from './../../elements/navDropdown'

const Header = (props) => {
  return (
    <HeaderContainer>
      <LanguageSwitch>
        <UserIcon>
          <FaUserPlus />
        </UserIcon>
        <Language>العربية</Language>
      </LanguageSwitch>

      <Nav>
        <NavBar>
          <li>360 Planeer</li>

          <li>her</li>
          <li>
            him
            <NavDropdown name="him" id="him">
              <DropDownItemLink to="/suits">suits</DropDownItemLink>
              <DropDownItemLink to="/health">Health</DropDownItemLink>
              <DropDownItemLink to="/mensGrooming">
                men's grooming
              </DropDownItemLink>
              <DropDownItemLink to="/fitness">fitness</DropDownItemLink>
              <DropDownItemLink to="/more">more</DropDownItemLink>
            </NavDropdown>
          </li>
          <li>the wedding</li>
        </NavBar>
        <NavLogo>
          <img src="logo.png" alt="Logo" />
        </NavLogo>
        <NavBar>
          {' '}
          <li>vendors</li>
          <li>gallery</li>
          <li>ideas and more</li>
        </NavBar>
      </Nav>

      <BurgerIcon>
        <FiAlignJustify></FiAlignJustify>
      </BurgerIcon>
    </HeaderContainer>
  )
}

export default Header
