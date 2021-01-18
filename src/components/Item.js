import React, { useState, useEffect } from "react";
import { useFormFields } from "./useFormFields";
import axios from "axios";
// get items from online api
// it's return a json file
const Item = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://solar-mid-be.herokuapp.com/api/magicitems"
      );

      setData(result.data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
            <div className="bg-red-200 p-3 m-5">
              <p className="font-bold">Name: {item.name}</p>
              <p>Magic Item ID: {item.id}</p>
            </div>
            <div className="bg-white p-3 m-5">
              <p className="font-bold">Details: {item.oppDesc}</p>
              <p>Vessel Material: {item.vesselMat}</p>
              <p>Vessel Type: {item.vesselType}</p>
              <p>Enchantments: {item.enchantments}</p>
              <p>Written by: {item.writtenBy}</p>
              <p>Date Written: {item.createdDate}</p>
              <p>Last Player: {item.lastPlayer}</p>
              <p>Hidden/Masked Detail: {item.hiddenDetail}</p>
            </div>
            <div className="bg-blue-200 p-3 m-5">
              <p className="font-bold">Formal Details:</p>
              <p>Formal Space Total: {item.formalSpaceTotal}</p>
              <p>Formal Space Remaining: {item.formalSpaceRemaining}</p>
              <p>Earth Expires: {item.expirationDateEarth}</p>
              <p>Celestrial Expires: {item.expirationDateCelestial}</p>
              <p>Socket ID: {item.socketID}</p>
              <p>Socket Amount: {item.socketAmount}</p>
            </div>
            <div className="bg-yellow-200 p-3 m-5">
              <p className="font-bold">Edit Details:</p>
              <p>Last Edit: {item.lastEditBy}</p>
              <p>Reason for Edit: {item.lastEditReason}</p>
              <p>Last Edit Date: {item.lastEditDate}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Item;

//   componentDidMount() {
//     fetch("https://solar-mid-be.herokuapp.com/api/magicitems")
//       .then((response) => response.json())
//       .then(
//         // handle the result
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result,
//           });
//         },

//         // Handle error
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   } */
