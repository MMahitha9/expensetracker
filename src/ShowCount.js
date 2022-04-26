import React from "react";
import { useSelector } from "react-redux";

const ShowCount = () => {

    const count = useSelector((state) => {
        return state.count
    })

    return (
        <h2>COUNTER - { count } </h2>
    )
}

export default ShowCount