import React, { useState } from 'react'
import { data } from "../data/data.js";

const Foods = () => {

    const [foods, setFoods] = useState(data);
    // Filtrage des categories de la nourriture
    const categoriesFood = data.reduce(
      (arr, food) =>
        arr.includes(food.category) ? arr : arr.concat(food.category),
      []
    );
    // filtrage des categories du prix
    const categoriesPrice = data.reduce(
      (arr, food) =>
        arr.includes(food.price) ? arr : arr.concat(food.price),
      []
    ).sort();
    // Filtrage du Food et du price
    const categoryFoods = (nourriture) =>
      data.filter((food) => food.category === nourriture);
    const categoryprice = (prix) => data.filter((food) => food.price === prix);


    return (
      <div className="max-w-[1640px] mx-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Les Amuses Bouches les Mieux Notées
        </h1>

        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Filter type */}
          <div>
            <p className="font-bold text-gray-700">
              Filtrage du type de bouffe
            </p>
            <div className="flex justify-between flex-wrap">
              <button
                className="m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                onClick={() => setFoods(data)}
              >
                Tout
              </button>
              {categoriesFood.map((food) => (
                <button
                  className="m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => setFoods(categoryFoods(food))}
                >
                  {food}
                </button>
              ))}
            </div>
          </div>

          {/* Filter price */}
          <div>
            <p className="font-bold text-gray-700">Filtrage de prix</p>
            <div className="flex justify-between max-w-[390px] w-full">
              {categoriesPrice.map((prix) => (
                <button
                  className="m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => setFoods(categoryprice(prix))}
                >
                  {prix}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {foods.map((items, index) => (
            // Shadow permet d'ajouter de l'ombre sur les elements
            // scale permet de reduire ou d'agrandir les elements suivant la taille preciser lorsqu'on survole l'element
            <div
              key={items.id}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={items.image}
                alt={items.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{items.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {items.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Foods