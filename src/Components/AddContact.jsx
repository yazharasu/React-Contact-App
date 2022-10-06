import React from 'react';
import { useState } from 'react';
import './AddContact.css';
import data from '../Assets/data.json';

const AddContact = ( {toggleAddContact}) => {
  const [ name, setName ] = useState("");
  const [ number, setNumber ] = useState();

  const addContact = (event) => {
    event.preventDefault();
    data.data.push( { "name": name, "mobile": number });
    toggleAddContact();
  }

  return (
    <div className='addCon-mainContainer'>
    <div className='addCon-con'>
        <div className='title'>
          <span className='addcon'>Enter Contact Details</span>
          <span className='close-icon' onClick={toggleAddContact}>X</span>
        </div>

        <form onSubmit={addContact}>
            <label className='inputText' for="fname">Name:</label><br/>
            <input type="text" id="name" name="name" onChange={ (e) => setName(e.target.value) }/><br/>
            <label className='inputText' for="number">Mobile Number:</label><br/>
            <input type="number" id="number" name="number" onChange={ (e) => setNumber(e.target.value) }/><br/>
            <input type="submit" id="submit" name="submit"/>
        </form>
    </div>
    </div>
  )
}

export default AddContact