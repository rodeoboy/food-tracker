// src/components/FoodData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodListPage = () => {
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('fitbit_token');
      if (token) {
        try {
          const response = await axios.get('https://api.fitbit.com/1/user/-/foods/log/date/today.json', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setFoodData(response.data);
        } catch (error) {
          console.error('Error fetching food data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Food Consumption Data</h1>
      {foodData ? (
        <pre>{JSON.stringify(foodData, null, 2)}</pre>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
};

export default FoodListPage;