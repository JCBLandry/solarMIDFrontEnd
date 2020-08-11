## Motivation
Solar: Cerroneth has stored vital business data on index cards for over two decades. This software is meant to be a backup or potential replacement for these analog systems.

## Build status

[![Build Status](https://travis-ci.com/JCBLandry/solarMIDFrontEnd.svg?branch=master)](https://travis-ci.org/JCBLandry/foco)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 

## Tech/framework used
 React, Node.js, Tailwind CSS, Sqlite3.

<b>Built with</b>
- [Visual Studio Code](https://code.visualstudio.com/)

## Features
<ul>
 <li><b>Create, Edit, Delete items specified for the Solar: Cerroneth</b></li>
 <li><b>See listing of all items currently in the database</b></li>
 <li><b>Search by Item ID</b></li>
 <li><b>Filter by Details</b>(Uncomming Feature)</li>
</ul>  

## API Reference

<b>Items must be sent as a JSON object with the following schema(* marks indicate required fields):</b>
<br>
  <b>id:</b> Increments automatically. Interger.*
  <br>
  <b>name:</b> Name of the item, must be a string.*
  <br>
 	<b>oopDesc: </b>The out of play description of the item, must be a string.*
  <br>
 	<b>vesselMat: </b>The material the item is made of, must be a string.*
  <br>
  <b>vesselType: </b>The Type of item, must be a string.*
  <br>
	 <b>enchantments: </b>Any enchantments on the item, must be a string.
  <br>
	 <b>createdDate: </b>YYYY-MM-DD format.*
  <br>
	 <b>expirationDateEarth:</b> YYYY-MM-DD format.*
  <br>
	 <b>expirationDateCelestial: </b>YYYY-MM-DD format.*
  <br>
	 <b>formalSpaceTotal:</b> Total formal space the item would have with no enchantments, must be an interger.*
  <br>
	 <b>formalSpaceRemaining:</b> Remaining formal space the item would have with no enchantments, must be an interger.*
  <br>
	 <b>socketID: </b>Socket number for tracking, must be an interger.
  <br>
	 <b>socketAmount:</b> Number of sockets present on item, must be an interger.
  <br>
	 <b>writtenBy:</b> Name of the plot member that wrote the card, must be a string.*
  <br>
	 <b>lastEditBy:</b> Name of the staff member that edited the card last, must be a string. (FUTURE FEATURE)
  <br>
	 <b>lastEditReason: </b>Reason for the last edit, must be a string.
  <br>
	 <b>lastEditDate:</b> YYYY-MM-DD format.
  <br>
	 <b>lastPlayer:</b> Player last known to have the item, must be a string.
  <br>
	 <b>hiddenDetail:</b> Hidden details about the item not to be shown to players, must be a string.
  <br>
 
 
 
 
 <b>Schema Example:</b>
 <br>
 <b>{</b>
 <br>
 <b> "name": </b>"Test Item 1",
  <br>
 	<b>"oopDesc": </b>"A small dagger with strange runes carved into the blade.",
  <br>
 <b>	"vesselMat":</b> "Cold Iron",
  <br>
  <b>"vesselType": </b>"Small Weapon",
  <br>
	<b>"enchantments": </b>"+1 vs Fae, 3 Pin per day",
 <br>
	<b>"createdDate": </b>"2020-07-29",
 <br>
	<b>"expirationDateEarth":</b> "2020-12",
 <br>
	<b>"expirationDateCelestial":</b> "2020-11",
 <br>
	<b>"formalSpaceTotal":</b> 50,
 <br>
	<b>"formalSpaceRemaining":</b> 0,
 <br>
	<b>"socketID": </b>23,
 <br>
	<b>"socketAmount":</b> 6,
 <br>
	<b>"writtenBy": </b>"Justin Landry",
 <br>
	<b>"lastEditBy":</b> "Justin Landry",
 <br>
	<b>"lastEditReason":</b> "Audit",
 <br>
	<b>"lastEditDate": </b>"2020-07-29",
 <br>
	<b>"lastPlayer": </b>"Kabir",
 <br>
	<b>"hiddenDetail": </b>"Cursed, double damage from fire"
 <br>
 <b>}</b>

## How to use?
Once logged in, simply input the required fields to add an item to the database. Hover over helpful hints for details on how certain features work in the Application(Upcoming Feature).



