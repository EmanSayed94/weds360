import React from 'react'
import {
  BreadCrumbContainer,
  BreadCrumbIcon,
} from './../../elements/breadCrumb'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

const BreadCrumb = () => {
  return (
    <BreadCrumbContainer>
      <h3>
        <Link to="">Him</Link>
      </h3>
      <BreadCrumbIcon>
        <FaAngleRight />
      </BreadCrumbIcon>
      <h2>Suits</h2>
    </BreadCrumbContainer>
  )
}

export default BreadCrumb
