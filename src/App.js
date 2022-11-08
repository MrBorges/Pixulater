import { useState } from 'react';
import './App.css';
import InsertFoodComponent from './Components/InsertFoodComponent/InsertFoodComponent';
import FoodListComponent from './Components/FoodListComponent/FoodListComponent';

function App() {

  const [foodList, setFoodList] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [foodDescription, setFoodDescription] = useState('');

  let nextFoodId = 0;

  return (
    <div className="App container-md">
      <FoodListComponent foodList={foodList}/> 
      <InsertFoodComponent 
        setFoodList={setFoodList}
        setFoodName={setFoodName}
        nextFoodId={nextFoodId}
        foodName={foodName}
        foodList={foodList}
        foodDescription = {foodDescription}
        setFoodDescription = {setFoodDescription}
      />      
      {
        /* 
          
          <ImageSearchComponent/>
          <NextStageButton/>
        */
      }
    </div>
  );
}

export default App;
