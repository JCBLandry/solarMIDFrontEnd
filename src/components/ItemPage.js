import React from "react";
import Item from "./Item";
import ItemInput from "./ItemInput";
import FindItem from "./FindItem";

const ItemPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold">Cerroneth Magic Item Database</h1>
      <div>
        <ItemInput />
        <div>
          <FindItem />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
