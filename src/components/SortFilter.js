import React, { useState }  from "react";

function SortFilter({ onSortBy, sortBy }){

    function handleSort(e) {
        onSortBy(e.target.value);
    }

   return( 
    <div className="filter">
        <label>Sort By: </label>
        <select onChange={handleSort} value={sortBy}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    </div>
   )
}

export default SortFilter