import React, { Component } from 'react';

class ItemInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      realm:"",
      expires: "",
      magical: "",
      charges: "",
      details: "",
      writtenBy: "",
      dateWritten: "",
      formalSpaceRemaining: 0,
      formalSpaceTotal: 0,
      lastplayer: "",
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
      <div>
      <form onSubmit={this.handleSubmit}>
      <input onChange= {this.handlechange} type="text" placeholder="name" name="name" />
      <input onChange= {this.handlechange} type="text" placeholder="Realm" name="realm"  />
      <input onChange= {this.handlechange} type="text" placeholder="Expires" name="expires"  />
      <input onChange= {this.handlechange} type="text" placeholder="Magical?" name="magical"  />
      {/* <input type="text" placeholder="number" name="number"  /> */}
      <input onChange= {this.handlechange} type="number" placeholder="Charges" name="charges"  />
      {/* <input type="text" placeholder="chargeLikeDetail" name="chargeLikeDetail"  /> */}
      <input onChange= {this.handlechange} type="text" placeholder="Details" name="details"  />
      <input onChange= {this.handlechange} type="text" placeholder="Written By" name="writtenBy"  />
      <input onChange= {this.handlechange} type="text" placeholder="Date Written" name="dateWritten"  />
      <input onChange= {this.handlechange} type="number" placeholder="Formal Space Total" name="formalSpaceTotal"  />
      <input onChange= {this.handlechange} type="number" placeholder="Formal Space Remaining" name="formalSpaceRemaining"  />
      <input onChange= {this.handlechange} type="text" placeholder="Last Player" name="lastplayer"  />

      <input type="submit" />
    </form>
    </div>
    );
  }
}
export default ItemInput