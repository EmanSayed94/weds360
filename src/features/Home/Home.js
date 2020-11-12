import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Filter from '../../components/Filter/Filter'
import ImageListing from '../../components/ImageListing/ImageListing'
import Pagination from '../../components/Pagination.js/Pagination'
import { PhotoSectionContainer } from '../../elements/photosContainer'

const HomePage = () => {
  return (
    <>
      <BreadCrumb />
      <PhotoSectionContainer>
        <Filter />
        <ImageListing />
      </PhotoSectionContainer>
      <Pagination />
    </>
  )
}

export default HomePage
