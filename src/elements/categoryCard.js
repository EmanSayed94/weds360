import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'

export const CategoryCardContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  @media only screen and (max-device-width: 768px) {
    justify-content: center;
  }
`
export const CategoryCard = styled.div`
  width: 30%;
  height: 200px;
  text-align: center;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./../images/background.jpg');
  background-repeat: no-repeat;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2.5rem;
  text-transform: capitalize;
  @media only screen and (max-device-width: 768px) {
    width: 80%;
  }
`
export const AllCategoriesContainer = styled.div`
  width: 100%;
  background: black;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
  div {
    color: white;
    font-size: 1.6rem;
    text-transform: capitalize;
    width: 50px;
  }
`

export const ArrowIcon = styled(FaAngleDown)`
  font-size: 1.6rem;
  position: absolute;
  left: 40%;
  top: 26%;
`
