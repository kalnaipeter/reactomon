import React from "react";
import { useHttp } from "../hooks/http";
import styled from "styled-components";

const StyledTypeList = styled.div`
  display: block;
  padding: 40px;
  width: 960px;
  margin: auto;
  border-radius: 20px;
  background-color: red;
  & li {
    list-style-type: none;
    text-align: center;
  }
`;

const Types = (props) => {
  const [isLoading, fetchedData] = useHttp(
    "https://pokeapi.co/api/v2/type",
    []
  );

  const types = fetchedData ? fetchedData.data.results : [];

  if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <StyledTypeList>
        <h2>Pokemon Types</h2>
        <ul>
          {types.map((type, index) => (
            <li key={index}>{type.name}</li>
          ))}
        </ul>
      </StyledTypeList>
    );
  }
};

export default React.memo(Types);
