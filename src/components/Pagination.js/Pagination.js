import React from 'react'
import { Link } from 'react-router-dom'
import {
  ActivePaginationItem,
  PaginationContainer,
  PaginationItem,
  PaginationList,
} from './../../elements/pagination'

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationList>
        <PaginationItem>
          <Link>Previous</Link>
        </PaginationItem>
        <PaginationItem>
          <Link>1</Link>
        </PaginationItem>
        <PaginationItem>
          <Link>2</Link>
        </PaginationItem>
        <PaginationItem>
          <Link>3</Link>
        </PaginationItem>
        <ActivePaginationItem>
          <Link>4</Link>
        </ActivePaginationItem>
        <PaginationItem>
          <Link>Next</Link>
        </PaginationItem>
      </PaginationList>
    </PaginationContainer>
  )
}

export default Pagination
