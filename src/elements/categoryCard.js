import styled from 'styled-components'

export const CategoryCardContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
