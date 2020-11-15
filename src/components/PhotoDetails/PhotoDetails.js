import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import {
  DetailsImage,
  ImageDescription,
  PhotoDetailsContainer,
  SocialMediaIcons,
} from './../../elements/photoDetails'
import { useParams } from 'react-router-dom'

const PhotoDetails = (props) => {
  const { name, description, imageUrl } = props.image
  return (
    <PhotoDetailsContainer>
      <DetailsImage>
        <img src={`./../images/${imageUrl}`} />
      </DetailsImage>
      <ImageDescription>
        <h1>{name}</h1>
        <p>{description}</p>
        <SocialMediaIcons>
          <FaFacebook />
          <AiFillTwitterCircle />
        </SocialMediaIcons>
      </ImageDescription>
    </PhotoDetailsContainer>
  )
}

export default PhotoDetails
