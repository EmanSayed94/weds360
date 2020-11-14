import React, { useEffect } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Filter from '../../components/Filter/Filter'
import ImageListing from '../../components/ImageListing/ImageListing'
import Pagination from '../../components/Pagination.js/Pagination'
import { PhotoSectionContainer } from '../../elements/photosContainer'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'IMAGES_FETCH' })
  }, [dispatch])
  const images = useSelector((state) => state.images.images)

  return (
    <>
      <BreadCrumb />
      <PhotoSectionContainer>
        <Filter />
        <ImageListing images={images} />
      </PhotoSectionContainer>
      <Pagination />
    </>
  )
}

export default HomePage
