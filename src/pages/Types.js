import React from "react";
import { useHttp } from "../hooks/http";

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
      <div className="App">
        <ul>
          {types.map((type) => (
            <p>{type.name}</p>
          ))}
        </ul>
      </div>
    );
  }
};

export default React.memo(Types);
