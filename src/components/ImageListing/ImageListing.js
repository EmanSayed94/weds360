import React from 'react'
import ImageItem from '../ImageItem/ImageItem'

import { PhotoContainer } from '../../elements/photosContainer'
const ImageListing = (props) => {
  //   const { imageArr = [1, 2, 3, 4, 5, 6, 7, 9] } = props
  const imageArr = [1, 2, 3, 4, 5, 6, 7, 9]
  return (
    <PhotoContainer>
      {imageArr.length && imageArr.map((imageItem) => <ImageItem />)}
    </PhotoContainer>
  )
}

export default ImageListing
