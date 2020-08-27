import React, { useState } from 'react';
import { css } from 'emotion';
import { useFormFields } from "./useFormFields"
import { FormGroup, FormControl } from "react-bootstrap";
import axios from 'axios';

const ItemInput = () => {
  const [ display, setDisplay ] = useState("hidden")

  const [fields, handleFieldChange ] = useFormFields(
    {
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
      hiddenDetail: ""
    }
  );

const handleSubmit = (e) => {
  axios.post('https://solar-mid-be.herokuapp.com/api/magicitems', fields)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    }) 
}

    return (
      
      <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded " onClick={()=> setDisplay("block")}>New Magic Item</button>
        <div className={display}>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "onClick={()=> setDisplay("hidden")}>Cancel</button>
        
        <p className="p-3 font-bold">New Magic Item</p>
        <form onSubmit={handleSubmit}>
        
        <FormGroup controlId="name">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Item Name"
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="oopDesc">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="OOP Description"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="vesselMat">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Vessel Material"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="vesselType">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Vessel Type (Sword, Wand, Boots, etc.."
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="enchantments">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Enchantments"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="expirationDateEarth">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Earth Expiration Date"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="expirationDateCelestial">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Celestial Expiration Date"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="formalSpaceRemaining">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Formal Space Remaining"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="formalSpaceTotal">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Formal Space Total"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="socketID">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Socket ID"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="socketAmount">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Socket Amount"
            onChange={handleFieldChange}
          />
        </FormGroup>
        
        <FormGroup controlId="writtenBy">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Written By"
            onChange={handleFieldChange}
          />
        </FormGroup>

        {/* <input onChange={handleFieldChange} type="text" placeholder="Last Editor" name="lastEditBy" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange={handleFieldChange} type="text" placeholder="Last Edit Reason" name="lastEditReason" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/> */}

        <FormGroup controlId="lastPlayer">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Last Player Owned"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="hiddenDetail">
          <FormControl
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
            autoFocus
            placeholder="Hidden Details (Cursed, Masked, Etc..)"
            onChange={handleFieldChange}
          />
        </FormGroup>

        <input type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"/>
        </form>
        </div>
    </div>
    );
}
export default ItemInput