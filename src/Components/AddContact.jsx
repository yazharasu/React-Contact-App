import React from 'react';
import './AddContact.css';

const AddContact = ( {addContact, setAddContact}) => {

  return (
    <div className='addCon-mainContainer'>
    <div className='addCon-con'>
        <span className='addcon'>Enter Contact Details</span>
        <span className='close-icon'>X</span>
        <form>
            <label className='inputText' for="fname">Name:</label><br/>
            <input type="text" id="name" name="name" /><br/>
            <label className='inputText' for="number">Mobile Number:</label><br/>
            <input type="number" id="number" name="number" /><br/>
            <input type="submit" id="submit" name="submit" />
        </form>
    </div>
    </div>
  )
}

export default AddContact