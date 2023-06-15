import React, { useState }  from "react";
import HogCard from "./HogCard";
import GreaseFilter from "./GreaseFilter";
import SortFilter from "./SortFilter";

function HogList({ hogs }) {

   const [selectedCategory, setSelectedCategory] = useState("All");
   const [sortBy , setSortBy] = useState("name");


   const onGreaseFilter = (option) => {
    setSelectedCategory(option);
   }
   
   const onSortBy = (option) => {
    setSortBy(option);
   }

   const greaseFilteredPigs = hogs
        .filter((hog) => {
                if (selectedCategory === "All") {
                    return true;
                }

                else if (selectedCategory === "Greased") {
                    return hog.greased;
                }

                else {
                    return !hog.greased;
                }
        })
   
        .sort((hogA, hogB) => {
            if (sortBy === "weight"){
                return hogA.weight - hogB.weight;
            }

            else {
                return hogA.name.localeCompare(hogB.name);
            }
        }
        
        )
   
   

const hogsToDisplay = greaseFilteredPigs.map((hog) => {
    return (
        <div className= "ui grid container">

            <HogCard 
                key={hog.name}
                hogImage={hog.image}
                hogName={hog.name}
                weight={hog.weight}
                greased={hog.greased}
                specialty={hog.specialty}
                highestMedal={hog["highest medal achieved"]} />  
        </div>
);

});

return (
    <div>
        <GreaseFilter onGreaseFilter={onGreaseFilter} />
        <SortFilter sortBy={sortBy} onSortBy={onSortBy}/>
        <div className="hogsdisplay">{hogsToDisplay}</div>
    </div>
);
}





export default HogList;