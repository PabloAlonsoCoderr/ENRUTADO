import Cards from "../comp/Cards";

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
      <div>ItemListContainer</div>
      <div className="cards__c">
        <Cards nombre="pedro" id="1" />
        <Cards nombre="david" id="2" />
        <Cards nombre="juan" id="3" />
      </div>
    </div>
  );
};

export default ItemListContainer;
