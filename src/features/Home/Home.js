import React, { useEffect, useState } from 'react'
import { PhotoSectionContainer } from '../../elements/photosContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Filter from '../../components/Filter/Filter'
import ImageListing from '../../components/ImageListing/ImageListing'
import Pagination from '../../components/Pagination.js/Pagination'
import { searchForImage, clearSearch } from '../../store/imagesSlice'

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { categoryId } = useParams()
  const dispatch = useDispatch()

  let images = useSelector((state) => state.images.images)

  const pageSize = 6
  const startIndex = (currentPage - 1) * pageSize
  let imagesPerPage = images.slice(startIndex, startIndex + pageSize)

  useEffect(() => {
    dispatch({ type: 'IMAGES_FETCH_BY_CATEGORY_ID', payload: categoryId })
  }, [categoryId, dispatch])

  const handleSearch = (searchValue) => {
    if (searchValue !== '') {
      dispatch(searchForImage(searchValue))
    }
  }

  const handleClearSearch = () => {
    dispatch(clearSearch())
  }

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(images.length / pageSize)) {
      setCurrentPage(page)
    }
  }

  return (
    <>
      <BreadCrumb />
      <PhotoSectionContainer>
        <Filter
          handleSearch={handleSearch}
          handleClearSearch={handleClearSearch}
        />
        <ImageListing images={imagesPerPage} />
      </PhotoSectionContainer>
      {images.length > pageSize && (
        <Pagination
          pageSize={pageSize}
          count={images.length}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  )
}

export default HomePage
