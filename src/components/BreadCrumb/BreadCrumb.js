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
        <Link to="">gallery</Link>
      </h3>
      <BreadCrumbIcon>
        <FaAngleRight />
      </BreadCrumbIcon>
      <h2>Wedding ideas</h2>
    </BreadCrumbContainer>
  )
}

export default BreadCrumb
