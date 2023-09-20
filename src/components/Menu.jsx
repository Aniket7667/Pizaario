import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "../data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizzaData) => (
          <Pizza pizzaData={pizzaData} key={pizzaData.name} />
        ))}
      </ul>
    </main>
  );
}
