export default function Pizza(props) {
  const isPizza = props.pizzaData.soldOut;

  return (
    <li className={`pizza ${isPizza? " sold-out": ""}`}>
      <img src={props.pizzaData.photoName} alt={props.pizzaData.name} />
      <div>
        <h3>{props.pizzaData.name}</h3>
        <p>{props.pizzaData.ingredients}</p>
        <span>{isPizza?"SOLD OUT": props.pizzaData.price}</span>
      </div>
    </li>
  );
}
