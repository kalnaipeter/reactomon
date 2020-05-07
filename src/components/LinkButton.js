import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
    `}
  color: white;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  border-radius: 70px;
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    background-color: yellow;
  }
`;
