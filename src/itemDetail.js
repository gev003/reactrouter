import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Context from "./context";
import { useContext } from "react";

export default function ItemDetail(props) {
  // console.log("[props] ", props);
  const { id } = useParams();
  console.log(props);
  const data = useContext(Context);

  if (data.state.length < 1) {
    return <Redirect to="/shop" />;
  }

  let filteredComponent = data.state.find((obj) => obj.id === Number(id));

  return (
    <div>
      <h1>Item {id}</h1>
      <h3>Title: {filteredComponent && filteredComponent.title}</h3>
      <h3>Body: {filteredComponent && filteredComponent.body}</h3>
      <Link to="/shop">
        <button>Back To ShopPage</button>
      </Link>
    </div>
  );
}
