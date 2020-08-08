import React from 'react';
import FoundItem from "./FoundItem";

class FindItem extends React.Component{
    constructor(props) {
    super();
    this.state = {
      error : null,
      isLoaded : false,
      items : [], 
      id: 1       
  }
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
      
    }
    handleDelete = (e) => {
      e.preventDefault();
      fetch(`https://solar-mid-be.herokuapp.com/api/magicitems/${this.state.id}`, {
        method: 'DELETE'
      })
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
                                        <p className="font-bold">Details: {this.state.items.oppDesc}</p>
                                        <p>Vessel Material: {this.state.items.vesselMat}</p>
                                        <p>Vessel Type: {this.state.items.vesselType}</p>
                                        <p>Enchantments: {this.state.items.enchantments}</p>
                                        <p>Written by: {this.state.items.writtenBy}</p>
                                        <p>Date Written: {this.state.items.createdDate}</p>
                                        <p>Last Player: {this.state.items.lastPlayer}</p>
                                        <p>Hidden/Masked Detail: {this.state.items.hiddenDetail}</p>
                                    </div>
                                    <div className="bg-blue-200 p-3 m-5">
                                        <p className="font-bold">Formal Details:</p>
                                        <p>Formal Space Total: {this.state.items.formalSpaceTotal}</p>
                                    <p>Formal Space Remaining: {this.state.items.formalSpaceRemaining}</p>
                                    <p>Earth Expires: {this.state.items.expirationDateEarth}</p>
                                    <p>Celestrial Expires: {this.state.items.expirationDateCelestial}</p>
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
                    <button onClick={this.handleDelete} type="button" placeholder="Enter ID" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Delete</button>
                </div>    
    </div>
    )};}
export default FindItem;