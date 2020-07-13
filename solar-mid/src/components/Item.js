import React, { Component } from 'react';
// get items from online api
// it's return a json file
class Item extends Component {
    constructor(props){
        super(props);
        // this.handleSubmit.bind(this)
        this.state = {
            error : null,
            isLoaded : false,
            items : []          
        };
    }
  
    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 items 
        fetch("http://localhost:5000/api/magicitems")
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
        const {error, isLoaded, items} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    
      
                    <ol className="item">
                    {
                        items.map(item => (
                            <li key={item.id} align="start">
                                <div>
                                    <p>Name: {item.name}</p>
                                    <p>Details: {item.details}</p>
                                    <p>Realm: {item.realm}</p>
                                    <p>Expires: {item.expires}</p>
                                    <p>Written By: {item.writtenBy}</p>
                                    <p>Date Written: {item.dateWritten}</p>
                                    <p>Formal Space Total: {item.formalSpaceTotal}</p>
                                    <p>Formal Space Remaining: {item.formalSpaceRemaining}</p>
                                    <p>Last Player: {item.lastPlayer}</p>
                                    <p>Hidden/Masked Detail: {item.hiddenDetail}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }
  
  export default Item;