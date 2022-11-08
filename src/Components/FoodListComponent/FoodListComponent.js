import React from "react";

const FoodListComponent = ({foodList}) =>{
    return(
        <div>
            <ul className="list-group mt-2 ">
                {foodList.map(foodListItem =>(
                    <li key={foodListItem.foodId} className="list-group-item fs-4 fw-semibold">{foodListItem.foodName}</li>
                ))}
            </ul>
        </div>
    )
}

export default FoodListComponent;