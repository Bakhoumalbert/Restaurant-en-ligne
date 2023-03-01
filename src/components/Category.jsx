import React from 'react';
import { categories } from "../data/data.js";
const Category = () => {
  return (
    <div className="max-x-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Les Plats et boissons
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex p-4 border rounded-lg justify-between items-center bg-gray-100"
          >
            <h2 className="font-bold sm:text-xl">{cat.name}</h2>
            <img className="w-[50px]" src={cat.image} alt={cat.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category