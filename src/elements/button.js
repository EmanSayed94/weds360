import styled, { css } from 'styled-components'

export default styled.button`
  vertical-align: middle;
  background: transparent;
  text-transform: capitalize;
  ${(props) =>
    props.dark &&
    css`
      background: black;
      color: white;
    `}
  padding: 0;
  border: solid 1px #000;
  width: 55px;
  height: 21px;
  // margin-left: 3px;
  font-size: 12px;
  text-align: center;
  margin-right: 1rem;
`
