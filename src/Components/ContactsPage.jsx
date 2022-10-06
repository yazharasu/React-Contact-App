import React from 'react'
import { useState } from 'react';
import List from './List';
import './ContactsPage.css';
import data from '../Assets/data.json';


const ContactsPage = ( {addContact, toggleAddContact}) => {

  let contactData = data.data;

  
  return (
    <div className='contact-mainContainer'>
        <div onClick={toggleAddContact} className='addConBut'> Add Contact + </div>

        <div className='listEle' >
            { contactData.map( (item) => ( 
                <List name={item.name}   mobile={item.mobile} />
            ))
            }
        </div>
    </div>
  )
}

export default ContactsPage