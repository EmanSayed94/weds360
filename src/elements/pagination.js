import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  width: max-content;
`
export const PaginationItem = styled.li`
  display: block;
  a {
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    color: #337ab7;
    background-color: #fff;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 1.6rem;
    /* margin-left: -1px; */
    &:last-child {
      border-right: 1px solid #ddd;
    }
  }
`
export const ActivePaginationItem = styled(PaginationItem)`
  a {
    color: white;
    background-color: #024d4c;
  }
`
