import React, { useEffect, useState } from "react"

export default function AboutDec(props) {

    useEffect(() => {
        fetchItems()
    }, [])

    const [info, setInfo] = useState({
        geo: {},
        
    })

    const fetchItems = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
        .then(stream => stream.json())
        .then(response => setInfo(response.address))
    }
    
    return (
        <div>
            <h2>City: {Object.keys(info).length > 0 && info.city}</h2>
            <h2>Street: {Object.keys(info).length > 0 && info.street}</h2>
            // <h2>GEO: {Object.keys(info).length > 0 && info.geo.lat}</h2>
        </div>
    )
}