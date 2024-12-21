import React, {useEffect, useState} from 'react'
import AddFruitForm from './AddFruitFrom'
import api from '../api.js'

const FruitList = () => {
    const [fruitList, setFruitList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFruits = async () => {
        setIsLoading(true);
        setError(null);
        try{
            const response = await api.get("/fruits");
            setFruitList(response.data.fruits);
        }catch(error) {
            console.log("Error Fetching Fruits!!!");
        }finally {
            setIsLoading(false);
          }
    };

    const addFruit = async (fruitName) => {
        try{
            await api.post('/fruits', { name : fruitName});
            fetchFruits();
        }catch(error) {
            console.log("Error adding fruit!!!");
            setError('Failed to add fruit. Please try again later.');
        }
    };

    useEffect(() => {
        fetchFruits()
    }, []);

    return (
        <div className="fruit-list">
          <h2>Fruit List</h2>
    
          {isLoading ? (
            <p className="loading">Loading fruits...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <ul>
              {fruitList.map((fruit, index) => (
                <li key={index} className="fruit-item">
                  {fruit.name}
                </li>
              ))}
            </ul>
          )}
    
          <AddFruitForm addFruit={addFruit} />
        </div>
      );
};

export default FruitList;