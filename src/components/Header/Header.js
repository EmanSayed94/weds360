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
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Header = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch({ type: 'CATEGORIES_FETCH' })
  }, [dispatch])
  const categories = useSelector((state) => state.category.categories)
  const handleCategoryChange = (id) => {
    history.push(`/category/${id}`)
  }
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
              {categories.map((cat) =>
                cat.type === 'him' ? (
                  <DropDownItemLink
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {cat.name}
                  </DropDownItemLink>
                ) : null,
              )}
              <DropDownItemLink>more</DropDownItemLink>
            </NavDropdown>
          </li>
          <li>the wedding</li>
        </NavBar>
        <NavLogo>
          <img src="./../images/logo.png" alt="Logo" />
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
