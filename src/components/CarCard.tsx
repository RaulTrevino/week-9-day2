import React from 'react';

interface CarCardProps {
  car: {
    id: number;
    brand: string;
    model: string;
    year: number;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div>
      <h1>{car.brand}</h1>
      <h2>{car.model}</h2>
      <h3>{car.year}</h3>
    </div>
  );
};

export default CarCard;