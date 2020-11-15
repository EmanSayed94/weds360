import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  ArrowIcon,
  CategoryCard,
  CategoryCardContainer,
  AllCategoriesContainer,
} from './../../elements/categoryCard'

import {
  CategoriesSearch,
  CategoriesSearchContainer,
} from './../../elements/searchInput'
import { searchForCategory } from '../../store/categorySlice'

const CategoriesPage = () => {
  const [displayCategory, setDisplayCategory] = useState(false)

  const dispatch = useDispatch()
  const query = new URLSearchParams(useLocation().search)
  const type = query.get('type')

  const categories = useSelector((state) => state.category.categories)
  const categoriesByType = useSelector(
    (state) => state.category.categoriesByType,
  )

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES_BY_TYPE', payload: type })
  }, [type, dispatch])

  useEffect(() => {
    dispatch({ type: 'CATEGORIES_FETCH' })
  }, [dispatch])

  const handleInputChange = (e) => {
    dispatch(searchForCategory(e.target.value))
  }
  const handleToggle = () => {
    setDisplayCategory(!displayCategory)
  }

  return (
    <>
      <CategoriesSearchContainer>
        <CategoriesSearch placeholder="FIND CATEGORIES HERE"></CategoriesSearch>
        <ArrowIcon onClick={handleToggle} />

        {/* <CategoriesSearch/> */}
        <CategoriesSearch placeholder="Search" onChange={handleInputChange} />
      </CategoriesSearchContainer>

      {displayCategory && (
        <AllCategoriesContainer>
          {categories.map((cat) => (
            <div>{cat.name}</div>
          ))}
        </AllCategoriesContainer>
      )}

      <CategoryCardContainer>
        {categoriesByType.map((item) => (
          <CategoryCard key={item.id}>{item.name}</CategoryCard>
        ))}
      </CategoryCardContainer>
    </>
  )
}

export default CategoriesPage
