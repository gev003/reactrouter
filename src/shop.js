import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    let info = localStorage.getItem("userPosts");
    if (!info) {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await data.json();
      setItems(response);
      localStorage.setItem("userPosts", JSON.stringify(response));
    } else {
      setItems(JSON.parse(info));
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Shop page</h1>
      {items.map((obj) => {
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
