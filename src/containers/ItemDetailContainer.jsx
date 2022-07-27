import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { river } = useParams();

  console.log(river);

  return (
    <div className="item_detail">
      <>detalle de producto</>
    </div>
  );
};

export default ItemDetailContainer;
