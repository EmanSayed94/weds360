import React from 'react'
import { ImageCard } from '../../elements/imageCard'

const ImageItem = (props) => {
  const { name, imageUrl } = props.image
  console.log(imageUrl)
  return (
    <ImageCard>
      <img src={`./images/${imageUrl}`} alt="b=navy brand" />
      <h3>{name}</h3>
    </ImageCard>
  )
}

export default ImageItem
