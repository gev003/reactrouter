import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {


  useEffect(() => {
    fetchUsers()
  }, [])

 const [data, setData] = useState([])

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(stream => stream.json())
    .then(response => setData(response))
  }
  
  return (
    <div>
      <h1>About Page</h1>
      {data.map((obj) => {
        return(
          <div key={obj.id}>
            <h2>
             <Link to={`/about/${obj.id}`}> Name: {obj.name} </Link>
              </h2>
            <h2>Phone: {obj.phone}</h2>
            <hr />
          </div>
        )
      })}
    </div>
  );
}

export default About;
