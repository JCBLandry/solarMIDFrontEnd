import React, { useState } from "react";
import { useFormFields } from "./useFormFields";
import axios from "axios";

const ItemInput = () => {
  let itemDeets = {
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
  };
  const [display, setDisplay] = useState({ display: "hidden" });

  const { value, bind, reset } = useFormFields("");

  const check = (e) => {
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    axios
      .post("https://solar-mid-be.herokuapp.com/api/magicitems", value)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert(`Submitting Name ${value.name}`);
  };

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
        onClick={() => check()}
      >
        Check Fields
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
        onClick={() => setDisplay({ display: "block" })}
      >
        New Magic Item
      </button>
      <div className={display}>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          onClick={() => setDisplay({ display: "hidden" })}
        >
          Cancel
        </button>

        <p className="p-3 font-bold">New Magic Item</p>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            placeholder="Item Name"
            type="text"
            {...bind}
          />
          <input
            controlId="oopDesc"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="OOP Description"
            {...bind}
          />

          <input
            controlId="vesselMat"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Vessel Material"
            {...bind}
          />

          <input
            controlId="vesselType"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Vessel Type (Sword, Wand, Boots, etc.."
            {...bind}
          />

          <input
            controlId="enchantments"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Enchantments"
            {...bind}
          />

          <input
            controlId="expirationDateEarth"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Earth Expiration Date"
            {...bind}
          />

          <input
            controlId="expirationDateCelestial"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Celestial Expiration Date"
            {...bind}
          />

          <input
            controlId="formalSpaceRemaining"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Formal Space Remaining"
            type="number"
            {...bind}
          />

          <input
            controlId="formalSpaceTotal"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Formal Space Total"
            {...bind}
          />

          <input
            controlId="socketID"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Socket ID"
            {...bind}
          />

          <input
            controlId="socketAmount"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Socket Amount"
            {...bind}
          />

          <input
            controlId="writtenBy"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Written By"
            {...bind}
          />

          <input
            controlId="lastPlayer"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Last Player Owned"
            {...bind}
          />

          <input
            controlId="hiddenDetail"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Hidden Details (Cursed, Masked, Etc..)"
            {...bind}
          />

          <input
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          />
        </form>
      </div>
    </div>
  );
};
export default ItemInput;
