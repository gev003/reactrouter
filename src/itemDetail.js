import React, { useEffect, useState } from "react";

export default function ItemDetail(props) {

  // console.log("[props] ", props);

  useEffect(() => {
    fetchItems()
  }, [])

  const [info, setInfo] = useState({});
  
  const fetchItems = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.match.params.id}`)
    const response = await data.json();
    setInfo(response)
  }

  return (
    <div>
      <h1>{info.title}</h1>
      <img src={info.url}></img>
    </div>
  );
}
