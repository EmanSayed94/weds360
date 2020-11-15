import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 80%;
  border: 1px solid black;
  /* margin: 1.5rem 0; */
  height: 2.5rem;
  font-size: 1.6rem;
  padding: 0.5rem;
`
export const CategoriesSearch = styled(SearchInput)`
  width: 43%;
  height: 4rem;
  border: 2px solid black;
  text-align: center;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
`
export const CategoriesSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`
