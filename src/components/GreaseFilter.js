import React, { useState } from "react";

function GreaseFilter({ onGreaseFilter }){

    function handleFilter(e) {
        onGreaseFilter(e.target.value)
    }

    return (
        <div className="filter">
        <label>Filter Greased Hogs: </label>
        <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Greased">Greased</option>
            <option value="Not Greased">Not Greased</option>
        </select>
        </div>
    )
}

export default GreaseFilter;