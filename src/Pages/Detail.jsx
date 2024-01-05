import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const detail = state?.movie;
  console.log("Details", detail);

  return (
    <div>
      <h1>Details page</h1>
      <p>Movie id : {id}</p>
      {detail ? <p>Movie detail: {detail.title}</p> : <p>Loading...</p>}
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default Detail;
