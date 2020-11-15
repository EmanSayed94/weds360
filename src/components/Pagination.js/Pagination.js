import React from 'react'
import {
  ActivePaginationItem,
  PaginationContainer,
  PaginationItem,
  PaginationList,
} from './../../elements/pagination'

const Pagination = (props) => {
  const { pageSize, currentPage, count, handlePageChange } = props
  const noOfPages = Math.ceil(count / pageSize)
  const pages = Array.from({ length: noOfPages }, (v, k) => k + 1)

  return (
    <PaginationContainer>
      <PaginationList>
        <li>
          <PaginationItem onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </PaginationItem>
        </li>

        {pages.map((page) => (
          <li key={page} onClick={() => handlePageChange(page)}>
            {page === currentPage ? (
              <ActivePaginationItem>{page}</ActivePaginationItem>
            ) : (
              <PaginationItem>{page}</PaginationItem>
            )}
          </li>
        ))}

        <li>
          <PaginationItem onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </PaginationItem>
        </li>
      </PaginationList>
    </PaginationContainer>
  )
}

export default Pagination
