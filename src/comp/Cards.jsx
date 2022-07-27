import { Link } from "react-router-dom";
const Cards = (prop) => {
  return (
    <div className="card">
      <Link to={`/item_detail/${prop.id}`}>
        <p id={prop.id}>{prop.nombre}</p>
        <button>{prop.id}</button>
      </Link>
    </div>
  );
};

export default Cards;
