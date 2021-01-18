<<<<<<< HEAD
import React, { useState } from 'react';
import { useFormFields } from "./useFormFields"
import { FormGroup, FormControl } from "react-bootstrap";
import axios from 'axios';


const ItemInput = () => {
  const [ display, setDisplay ] = useState("hidden")

  const [fields, handleFieldChange ] = useFormFields(
    {
=======
import React from 'react';

class ItemInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
>>>>>>> parent of 66944e2b... Refactored toggling!
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
      display: "block"
     };
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://solar-mid-be.herokuapp.com/api/magicitems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    // event.preventDefault();
}
handlechange = (e) =>{
  e.preventDefault()

  this.setState({
          ...this.state.newitem,
          [e.target.name] : e.target.value
      
  })
}

editMode = (e) =>{
  e.preventDefault()
    this.setState = ({display: "hidden"})
}
  render() {
    return (
      <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
        <button onClick={this.editMode} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">New Item</button>
        <div className={this.state.editing}>
        <p className="p-3 font-bold">New Magic Item</p>
        <form onSubmit={this.handleSubmit}>
        <input onChange= {this.handlechange} type="text" placeholder="Item Name" name="name" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="OOP Description" name="oopDesc" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Vessel Material" name="vesselMat" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Vessel Type" name="vesselType" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Enchantments" name="enchantments" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Earth Expiration Date" name="expirationDateEarth" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Celestial Expiration Date" name="expirationDateCelestial" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Formal Space Remaining" name="formalSpaceRemaining" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Formal Space Total" name="formalSpaceTotal" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Socket ID" name="socketID" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Socket Amount" name="socketAmount" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>
        
        <input onChange= {this.handlechange} type="text" placeholder="Written By" name="writtenBy" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        {/* <input onChange= {this.handlechange} type="text" placeholder="Last Editor" name="lastEditBy" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Last Edit Reason" name="lastEditReason" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/> */}

        <input onChange= {this.handlechange} type="text" placeholder="Player Last Owned" name="lastPlayer" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {this.handlechange} type="text" placeholder="Hidden Details (Masked, Cursed. etc" name="hiddenDetails" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"/>
        </form>
        </div>
    </div>
    );
  }
}
export default ItemInput