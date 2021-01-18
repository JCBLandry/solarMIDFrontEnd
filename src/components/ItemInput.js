import React, { useState } from "react";
import { useFormFields } from "./useFormFields";
import axios from "axios";

const ItemInput = () => {
  // this is the storage for our input
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
  // This is a storage for hiding the menus when not open
  const [display, setDisplay] = useState({ display: "hidden" });

  // This is the hook that connects the input from the user to the storage
  const { value, bind, reset } = useFormFields("");

  // this code is to the check the storage and see what is in it at the time
  const check = (e) => {
    console.log(value);
  };

  // this code handles when the item is submitted, lot to talk about here
  const handleSubmit = (e) => {
    //this stops the page from refreshing, the default action when something is submitted
    e.preventdefault();
    //this sends the data in the storage to the database as a new item
    axios
      .post("https://solar-mid-be.herokuapp.com/api/magicitems", value)
      .then(function (response) {
        console.log(response);
      })
      // This just catches any errors we get so we can display information about them
      .catch(function (error) {
        console.log(error);
      });
    // This is gonna let you know the item was submitted, it doesnt yet
    alert(`Submitting Name ${value.name}`);
  };
  // A big reason I refactored this, no more need for render methods, I can just return JSX
  return (
    // These classNames are Tailwind CSS classes that control how it is styled
    <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
        onClick={() => check()}
      >
        Check Fields
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
        // This toggles the storage to hide the menus or show them
        onClick={() => setDisplay({ display: "block" })}
      >
        New Magic Item
      </button>
      <div className={display}>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          // This toggles the storage to hide the menus or show them
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
