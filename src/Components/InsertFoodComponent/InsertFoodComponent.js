import React from "react";

const InsertFoodComponent = ({setFoodList, setFoodName, foodName, nextFoodId, foodList}) =>{
    return(
        <div>
            <input type="text" name="" id="" className="" value={foodName} 
                onChange={e => setFoodName(e.target.value) } 
                onKeyDown={
                    (e) => {
                        if (e.key === 'Enter'){                            
                            setFoodList([
                                ...foodList,
                                {id: nextFoodId++, foodName: foodName}
                            ])
                        }
                    }
                } />
        </div>
    )
}

export default InsertFoodComponent;