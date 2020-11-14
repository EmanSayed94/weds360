import React, { useEffect } from 'react'
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
import { useDispatch } from 'react-redux'

const Header = (props) => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch({ type: 'CATEGORIES_FETCH' })
  // })
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
              <DropDownItemLink>suits</DropDownItemLink>
              <DropDownItemLink>Health</DropDownItemLink>
              <DropDownItemLink>men's grooming</DropDownItemLink>
              <DropDownItemLink>fitness</DropDownItemLink>
              <DropDownItemLink>more</DropDownItemLink>
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
