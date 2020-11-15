import React, { useState } from 'react'
import {
  FilterButtonsContainer,
  FilterContainer,
} from './../../elements/filterContainer'
import Button from './../../elements/button'
import { SearchInput } from '../../elements/searchInput'

const Filter = (props) => {
  const { handleSearch, handleClearSearch } = props
  const [searchValue, setSearchValue] = useState('')

  return (
    <FilterContainer>
      <FilterButtonsContainer>
        <Button
          onClick={() => {
            setSearchValue('')
            handleClearSearch()
          }}
        >
          Clear
        </Button>
        <Button dark onClick={() => handleSearch(searchValue)}>
          Apply
        </Button>
      </FilterButtonsContainer>
      <SearchInput
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        value={searchValue}
      />
    </FilterContainer>
  )
}

export default Filter
