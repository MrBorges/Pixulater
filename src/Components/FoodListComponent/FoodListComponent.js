import React from "react";

const FoodListComponent = ({foodList}) =>{
    return(
        <div>
            <ul>
                {foodList.map(foodListItem =>(
                    <li key={foodListItem.foodId}>{foodListItem.foodName}</li>
                ))}
            </ul>
        </div>
    )
}

export default FoodListComponent;