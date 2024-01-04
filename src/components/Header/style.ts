import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #f8f9fa;
  position:fixed;
  z-index: 1;

  &.header {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-around;

      li {
        margin: 0 1rem;
      }
      span {
        width: 1.5rem;
        height: 1.5rem;
        bottom: -0.5rem;
        left: -0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
      }
    }
  }

`;
