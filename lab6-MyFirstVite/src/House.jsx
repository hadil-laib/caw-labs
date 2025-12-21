import './House.css';

function House(props) {
  return (
    <div className="House">
      <h2 className="House-title">{props.name}</h2>
      <p className="House-address">{props.address}</p>
      <p className="House-price">Price: {props.price}DA</p>
    </div>
  );
}

export default House;