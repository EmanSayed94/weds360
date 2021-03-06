import React from 'react'
import ImageItem from '../ImageItem/ImageItem'

import { PhotoContainer } from '../../elements/photosContainer'
const ImageListing = (props) => {
  const { images } = props

  return (
    <PhotoContainer>
      {images.length
        ? images.map((imageItem, index) => (
            <ImageItem key={imageItem.id} image={imageItem} />
          ))
        : 'No Data'}
    </PhotoContainer>
  )
}

export default ImageListing
