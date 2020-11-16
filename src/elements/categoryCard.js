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

  @media only screen and (max-device-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: max-content;
    div {
      font-size: 1.2rem;
      width: 100px;
      margin-bottom: 0.5rem;
    }
  }
`

export const ArrowIcon = styled(FaAngleDown)`
  font-size: 1.6rem;
  position: absolute;
  left: 85%;
    top: 25%;
}
`
export const AllCategoriesButton = styled.div`
  width: 43%;
  height: 4rem;
  border: 2px solid black;
  text-align: center;
  color: black;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only screen and (max-device-width: 768px) {
    font-size: 1.2rem;
  }
`
