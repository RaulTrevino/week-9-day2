import React from 'react';
import CarCard from './CarCard';

interface CarListProps {
  cars: {
    id: number;
    brand: string;
    model: string;
    year: number;
  }[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return (
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car) => (
          <CarCard key={car.id} car= {car} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;