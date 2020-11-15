import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PhotoDetails from '../../components/PhotoDetails/PhotoDetails'
import { useDispatch, useSelector } from 'react-redux'

const PhotoDetailsPage = () => {
  const dispatch = useDispatch()
  const { imageId } = useParams()
  const image = useSelector((state) => state.images.image)

  useEffect(() => {
    dispatch({ type: 'FETCH_IMAGE_BY_ID', payload: imageId })
  }, [imageId])

  return <PhotoDetails image={image} />
}

export default PhotoDetailsPage
