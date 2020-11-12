import React from 'react'
import ImageItem from '../ImageItem/ImageItem'

import { PhotoContainer } from '../../elements/photosContainer'
const ImageListing = () => {
  return (
    <PhotoContainer>
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
    </PhotoContainer>
  )
}

export default ImageListing
