import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "./context";

function Shop() {
  const { updateValue, state } = useContext(Context);

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    updateValue(response);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Shop page</h1>
      {state.map((obj) => {
        return (
          <div key={obj.id}>
            <span>
              <Link to={`/shop/${obj.id}`}>{obj.title}</Link>
            </span>{" "}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
