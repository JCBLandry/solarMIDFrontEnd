import React from 'react';

function NewItemInput(props) {
        return (
      <div className="max-w-lg rounded overflow-hidden shadow-lg m-10 p-10 bg-gray-200">
        <p className="p-3 ">New Magic Item</p>
        <form onSubmit={props.handleSubmit}>
        <input onChange= {props.handlechange} type="text" placeholder="Item Name" name="name" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="OPP Description" name="oppDesc" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Vessel Material" name="vesselMat" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Vessel Type" name="vesselType" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Enchantments" name="enchantments" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Earth Expiration Date" name="expirationDateEarth" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Celestial Expiration Date" name="expirationDateCelestial" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Formal Space Remaining" name="formalSpaceRemaining" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Formal Space Total" name="formalSpaceTotal" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Socket ID" name="socketID" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Socket Amount" name="socketAmount" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>
        
        <input onChange= {props.handlechange} type="text" placeholder="Written By" name="writtenBy" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        {/* <input onChange= {props.handlechange} type="text" placeholder="Last Editor" name="lastEditBy" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Last Edit Reason" name="lastEditReason" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/> */}

        <input onChange= {props.handlechange} type="text" placeholder="Player Last Owned" name="lastPlayer" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input onChange= {props.handlechange} type="text" placeholder="Hidden Details (Masked, Cursed. etc" name="hiddenDetails" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"/>

        <input type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"/>
        </form>
    </div>
        )
    }
export default NewItemInput;