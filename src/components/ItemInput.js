import React, { Component } from 'react';
import NewItemForm from '../components/NewItemForm.js';

class ItemInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
     };
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {

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

  
  render() {
    return (
      <NewItemForm />
    );
  }
}
export default ItemInput