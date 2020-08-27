import React, { useState } from "react";
import FoundItem from "./FoundItem";
import { useFormFields } from "./useFormFields";
import { FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import EditPage from "./EditPage";

const FindItem = () => {
  const [display, setDisplay] = useState("hidden");
  const [items, setItems] = useState([]);
  const [id, handleID] = useFormFields({
    id: 1,
  });

  const handleSubmit = (e) => {
    axios
      .get(`https://solar-mid-be.herokuapp.com/api/magicitems/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-teal-200">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
        onClick={() => setDisplay("block")}
      >
        Lookup / Edit Item
      </button>
      <div className={display}>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="id"
            placeholder="Enter ID"
            onChange={useFormFields}
            onSubmit={handleSubmit}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
          />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
            onClick={() => setDisplay("hidden")}
          >
            Cancel
          </button>
          <button
            type="Search"
            placeholder="Enter ID"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Find by ID
          </button>
        </form>
        <div>
          <ol className="item">
            <li className="" align="start">
              <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
                <div className="bg-red-200 p-3 m-5">
                  <p className="font-bold">Name: {items.name}</p>
                  <p>Magic Item ID: {items.id}</p>
                </div>
                <div className="bg-white p-3 m-5">
                  <p className="font-bold">Details:</p>
                  <p>Description: {items.oopDesc}</p>
                  <br></br>
                  <p>Vessel Material: {items.vesselMat}</p>
                  <p>Vessel Type: {items.vesselType}</p>
                  <br></br>
                  <p>Enchantments: {items.enchantments}</p>
                  <br></br>
                  <p>Written by: {items.writtenBy}</p>
                  <p>Date Written: {items.createdDate}</p>
                  <p>Last Player: {items.lastPlayer}</p>
                  <br></br>
                  <p>Hidden/Masked Detail: {items.hiddenDetail}</p>
                </div>
                <div className="bg-blue-200 p-3 m-5">
                  <p className="font-bold">Formal Details:</p>
                  <p>Formal Space Total: {items.formalSpaceTotal}</p>
                  <p>Formal Space Remaining: {items.formalSpaceRemaining}</p>
                  <br></br>
                  <p>Earth Expires: {items.expirationDateEarth}</p>
                  <p>Celestrial Expires: {items.expirationDateCelestial}</p>
                  <br></br>
                  <p>Socket ID: {items.socketID}</p>
                  <p>Socket Amount: {items.socketAmount}</p>
                </div>
                <div className="bg-yellow-200 p-3 m-5">
                  <p className="font-bold">Edit Details:</p>
                  <p>Last Edit: {items.lastEditBy}</p>
                  <p>Reason for Edit: {items.lastEditReason}</p>
                  <p>Last Edit Date: {items.lastEditDate}</p>
                </div>
              </div>
            </li>
          </ol>
          <EditPage />
        </div>
      </div>
    </div>
  );
};
export default FindItem;
