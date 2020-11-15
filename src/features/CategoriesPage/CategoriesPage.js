import React, { useEffect, useState } from 'react'
import {
  CategoryCard,
  CategoryCardContainer,
} from './../../elements/categoryCard'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  CategoriesSearch,
  CategoriesSearchContainer,
} from './../../elements/searchInput'
import { searchForCategory } from '../../store/categorySlice'

const CategoriesPage = () => {
  const dispatch = useDispatch()
  const query = new URLSearchParams(useLocation().search)
  const type = query.get('type')
  const categoriesByType = useSelector(
    (state) => state.category.categoriesByType,
  )

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES_BY_TYPE', payload: type })
  }, [type, dispatch])

  const handleInputChange = (e) => {
    dispatch(searchForCategory(e.target.value))
  }
  return (
    <>
      <CategoriesSearchContainer>
        <CategoriesSearch placeholder="FIND CATEGORIES HERE" />
        <CategoriesSearch placeholder="Search" onChange={handleInputChange} />
      </CategoriesSearchContainer>
      <CategoryCardContainer>
        {categoriesByType.map((item) => (
          <CategoryCard key={item.id}>{item.name}</CategoryCard>
        ))}
      </CategoryCardContainer>
    </>
  )
}

export default CategoriesPage
