import React from "react";

export default function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const shopTime = hours >= openHour && hours <= closeHour ? "open" : "close";

  return (
    <footer className="footer">
      {/* <p>{new Date().toLocaleString()}.</p> */}
      {shopTime === "open" ? (
        <div className="order">
          <p>
            We're currently {shopTime} until {closeHour} :00. Come visit us or
            order online.
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00 .
        </p>
      )}
    </footer>
  );
}
