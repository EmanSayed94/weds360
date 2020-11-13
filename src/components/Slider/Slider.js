import React, { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import {
  MainSliderContainer,
  NextImageContainer,
  SliderArrow,
} from './../../elements/slider'

const ImageSlider = ({ images }) => {
  // takes in images as props
  const [index, setIndex] = useState(1) // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length) // increases index by 1
  }

  const slideLeft = () => {
    const nextIndex = index - 1
    if (nextIndex < 0) {
      setIndex(images.length - 1) // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex)
    }
  }
  const prevIndex = index > 0 ? index - 1 : images.length - 1
  const nextIndex = index === images.length - 1 ? 0 : index + 1
  console.log(nextIndex)
  return (
    images.length > 0 && (
      <MainSliderContainer>
        <div>
          <NextImageContainer>
            <img src={`./images/` + images[prevIndex]} />
            <SliderArrow>
              <FaChevronLeft onClick={slideLeft} />
            </SliderArrow>
          </NextImageContainer>
        </div>

        <img
          style={{ height: '42rem' }}
          src={`./images/` + images[index]}
          alt={index}
        />
        <NextImageContainer>
          <img src={`./images/` + images[nextIndex]} />
          <SliderArrow>
            <FaChevronRight onClick={slideRight} />
          </SliderArrow>
        </NextImageContainer>
      </MainSliderContainer>
    )
  )
}

export default ImageSlider
