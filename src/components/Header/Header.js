import React, { useEffect, useState } from 'react'
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
import { Link, useHistory } from 'react-router-dom'
import { NavMobileItem, NavMobileItemSmall } from '../../elements/navMobile'
import { NavMobileContainer } from './../../elements/navMobile'

const Header = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const categories = useSelector((state) => state.category.categories)
  const [displayNav, setDisplayNav] = useState(false)

  useEffect(() => {
    dispatch({ type: 'CATEGORIES_FETCH' })
  }, [dispatch])

  const handleCategoryChange = (id) => {
    history.push(`/category/${id}`)
  }
  const toggleNav = () => {
    setDisplayNav(!displayNav)
  }
  return (
    <>
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
                <DropDownItemLink>
                  <Link style={{ color: 'black' }} to="/categories?type=him">
                    more
                  </Link>
                </DropDownItemLink>
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

        <BurgerIcon onClick={toggleNav}>
          <FiAlignJustify></FiAlignJustify>
        </BurgerIcon>
      </HeaderContainer>
      {displayNav && (
        <NavMobileContainer>
          <NavMobileItem>360 Planner</NavMobileItem>
          <NavMobileItem>For The Wedding</NavMobileItem>
          <NavMobileItem>
            <Link to="/categories?type=him">Him</Link>
          </NavMobileItem>
          <NavMobileItem>Her</NavMobileItem>
          <NavMobileItemSmall>Check List</NavMobileItemSmall>
          <NavMobileItemSmall>Guest List</NavMobileItemSmall>
          <NavMobileItemSmall>Registry List</NavMobileItemSmall>
          <NavMobileItemSmall>Budgeter</NavMobileItemSmall>
          <NavMobileItem>Gallery</NavMobileItem>
          <NavMobileItem>Ideas&More</NavMobileItem>
        </NavMobileContainer>
      )}
    </>
  )
}

export default Header
