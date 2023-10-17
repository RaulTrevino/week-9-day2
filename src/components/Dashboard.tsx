import React from 'react';
import CarList from './CarList';

const Dashboard: React.FC = () => {
  const cars = [
    {
      id: 1,
      brand: 'Nissan',
      model: 'Altima Sr',
      year: 2023,
    },
    {
      id: 2,
      brand: 'Nissan',
      model: 'Maxima',
      year: 2023,
    },

  ];

  return (
    <div>
      <h1>Car Inventory Dashboard</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default Dashboard;