import React, { useState } from "react";
import { useFormFields } from "./useFormFields";
import axios from "axios";

const EditPage = () => {
  const [items, setItems] = useState([]);
  const [display, setDisplay] = useState("hidden");
  const [id, handleID] = useFormFields({
    id: 1,
  });
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    oopDesc: "",
    vesselMat: "",
    vesselType: "",
    enchantments: "",
    createdDate: Date(),
    expirationDateEarth: "",
    expirationDateCelestial: "",
    formalSpaceTotal: 0,
    formalSpaceRemaining: 0,
    socketID: 0,
    socketAmount: 0,
    writtenBy: "",
    lastEditBy: "",
    lastEditReason: "",
    lastEditDate: Date(),
    lastPlayer: "",
    hiddenDetail: "",
  });
  const handleDelete = (e) => {
    axios
      .delete(`https://solar-mid-be.herokuapp.com/api/magicitems/${id}`, id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEdit = (e) => {
    axios
      .put(`https://solar-mid-be.herokuapp.com/api/magicitems/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={() => setDisplay("block")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Edit
      </button>
      <div className={display}>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          onClick={() => setDisplay("hidden")}
        >
          Cancel
        </button>
        <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
          <p className="p-3 font-bold">Edit Magic Item</p>
          <form onSubmit={handleEdit}>
            <p>{items.name}</p>
            <br></br>
            <p>Description:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder={items.oopDesc}
              name="oopDesc"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Enchantments:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder={items.enchantments}
              name="enchantments"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Earth Expires:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder={items.expirationDateEarth}
              name="expirationDateEarth"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Celestrial Expires:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder={items.expirationDateCelestial}
              name="expirationDateCelestial"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Remaing Formal Space:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder={items.oopDesc}
              name="formalSpaceRemaining"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Editor:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder="Please Enter Your Name"
              name="lastEditBy"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Edit Reason:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder="Reason for the Edit"
              name="lastEditReason"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Last Player:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder={items.lastPlayer}
              name="lastPlayer"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <p>Hidden Details:</p>

            <input
              onChange={handleFieldChange}
              type="text"
              placeholder={items.hiddenDetails}
              name="hiddenDetails"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            />

            <input
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            />
          </form>
        </div>
        <button
          onClick={handleDelete}
          type="button"
          placeholder="Enter ID"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditPage;
