import React from 'react'
import {
  FilterButtonsContainer,
  FilterContainer,
} from './../../elements/filterContainer'
import Button from './../../elements/button'
import { SearchInput } from '../../elements/searchInput'

const Filter = () => {
  return (
    <FilterContainer>
      <FilterButtonsContainer>
        <Button>Apply</Button>
        <Button dark>Clear</Button>
      </FilterButtonsContainer>
      <SearchInput />
    </FilterContainer>
  )
}

export default Filter
