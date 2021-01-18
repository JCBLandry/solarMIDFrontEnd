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
<<<<<<< HEAD
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
=======
      .then( response => response.json())
      .then(
          // handle the result
          (result) => {
              this.setState({
                  isLoaded : true,
                  items : result
              });
          },

          // Handle error 
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              })
          },
      )
  
      // event.preventDefault();
      
    }
    handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://solar-mid-be.herokuapp.com/api/magicitems/${this.state.id}`)
      .then( response => response.json())
      .then(
          // handle the result
          (result) => {
              this.setState({
                  isLoaded : true,
                  items : result
              });
          },

          // Handle error 
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              })
          },
      )
  
      // event.preventDefault();
  }
    componentDidMount(){
      // I will use fake api from jsonplaceholder website
      // this return 100 items 
      fetch(`https://solar-mid-be.herokuapp.com/api/magicitems/${this.state.id}`)
      .then( response => response.json())
      .then(
          // handle the result
          (result) => {
              this.setState({
                  isLoaded : true,
                  items : result
              });
          },

          // Handle error 
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              })
          },
      )
  }

render() {
  // const {error, isLoaded, items} = this.state;
    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-teal-200">
        <form  onSubmit={this.handleSubmit}>
            <input
             type="number"
             name="id"
             placeholder="Enter ID"
             onChange={this.handleChange}
             onSubmit={this.handleSubmit}
             className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" />
            <button type="Search" placeholder="Enter ID" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Find by ID</button>
      </form>
                <div>
                    
      
                    <ol className="item">
                            <li className="" align="start">
                                <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
                                    <div className="bg-red-200 p-3 m-5">
                                        <p className="font-bold">Name: {this.state.items.name}</p>
                                        <p>Magic Item ID: {this.state.items.id}</p>
                                    </div>
                                    <div className="bg-white p-3 m-5">
                                        <p className="font-bold">Details:</p>
                                        <p>Description: {this.state.items.oopDesc}</p>
                                        <br></br>
                                        <p>Vessel Material: {this.state.items.vesselMat}</p>
                                        <p>Vessel Type: {this.state.items.vesselType}</p>
                                        <br></br>
                                        <p>Enchantments: {this.state.items.enchantments}</p>
                                        <br></br>
                                        <p>Written by: {this.state.items.writtenBy}</p>
                                        <p>Date Written: {this.state.items.createdDate}</p>
                                        <p>Last Player: {this.state.items.lastPlayer}</p>
                                        <br></br>
                                        <p>Hidden/Masked Detail: {this.state.items.hiddenDetail}</p>
                                    </div>
                                    <div className="bg-blue-200 p-3 m-5">
                                        <p className="font-bold">Formal Details:</p>
                                        <p>Formal Space Total: {this.state.items.formalSpaceTotal}</p>
                                    <p>Formal Space Remaining: {this.state.items.formalSpaceRemaining}</p>
                                    <br></br>
                                    <p>Earth Expires: {this.state.items.expirationDateEarth}</p>
                                    <p>Celestrial Expires: {this.state.items.expirationDateCelestial}</p>
                                    <br></br>
                                    <p>Socket ID: {this.state.items.socketID}</p>
                                    <p>Socket Amount: {this.state.items.socketAmount}</p>
                                    </div>
                                    <div className="bg-yellow-200 p-3 m-5">
                                        <p className="font-bold">Edit Details:</p>
                                        <p>Last Edit: {this.state.items.lastEditBy}</p>
                                        <p>Reason for Edit: {this.state.items.lastEditReason}</p>
                                        <p>Last Edit Date: {this.state.items.lastEditDate}</p>
                                    </div>
                                </div>
                            </li>
                    </ol>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit</button>
                    <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
        <p className="p-3 font-bold">Edit Magic Item</p>
        <form onSubmit={this.handleEdit}>
        <p>{this.state.items.name}</p>
        <br></br>
        <p>Description:</p>

        <input onChange= {this.handlechange} type="text" placeholder={this.state.items.oopDesc} name="oopDesc" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <p>Enchantments:</p>

        <input onChange= {this.handlechange} type="text" placeholder={this.state.items.enchantments} name="enchantments" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <p>Earth Expires:</p>

        <input onChange= {this.handlechange} type="text" placeholder={this.state.items.expirationDateEarth}  name="expirationDateEarth" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <p>Celestrial Expires:</p>

        <input onChange= {this.handlechange} type="text" placeholder={this.state.items.expirationDateCelestial}name="expirationDateCelestial" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>
        
        <p>Remaing Formal Space:</p>

        <input onChange= {this.handlechange} type="text" placeholder={this.state.items.oopDesc} name="formalSpaceRemaining" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <p>Editor:</p>

        <input onChange= {this.handlechange} type="text" placeholder="Please Enter Your Name" name="lastEditBy" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <p>Edit Reason:</p>

        <input onChange= {this.handlechange} type="text" placeholder="Reason for the Edit" name="lastEditReason" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <p>Last Player:</p>

        <input onChange= {this.handlechange} type="text" placeholder={this.state.items.lastPlayer} name="lastPlayer" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <p>Hidden Details:</p>

        <input onChange= {this.handlechange} type="text" placeholder={this.state.items.hiddenDetails} name="hiddenDetails" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"/>
>>>>>>> parent of 66944e2b... Refactored toggling!
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
