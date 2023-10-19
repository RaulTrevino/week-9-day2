import React from 'react';


interface CarCardProps {
  car: {
    id: number;
    year: number;
    name: string;
    selling_price: string;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div>
      <h1>Year: {car.year}</h1>
      <h2>Make/Model: {car.name}</h2>
      <h3>Price: ${car.selling_price} usd i think?</h3>
    </div>
  );
};

export default CarCard;

