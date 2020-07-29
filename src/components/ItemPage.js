
import React from 'react';
import Item from './Item'
import ItemInput from './ItemInput'


const ItemPage = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="container mx-auto">
      <h1 className="font-bold">Cerroneth Magic Item Database</h1>
      <div>
        <ItemInput />
        <div >
        <Item />
        </div>
      </div>
    </div>
  );
}

export default ItemPage;


// import React, { Component } from 'react';
// import Item from './Item'
// import ItemList from './ItemList.js'

// class ItemPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     this.getItems('http://localhost:5000/api/magicitems');
//   }

//   getItems = URL => {
//     // We are calling an API to fetch some data from the api
//     // We then take that data and resolve it our state.
//     fetch(URL)
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         this.setState({ items: data.results });
//       })
//       .catch(err => {
//         throw new Error(err);
//       });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1 className="Header">Solar Magic Item Database</h1>
//         <ItemList  items = {this.state.items}/>
//       </div>
//     );
//   }
// }

// export default ItemPage;