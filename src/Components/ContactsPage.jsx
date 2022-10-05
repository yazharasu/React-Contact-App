import React from 'react'
import { useState } from 'react';
import List from './List';
import './ContactsPage.css'
import AddContact from './AddContact';

const ContactsPage = ( {addContact, toggleAddContact}) => {

  let contactData = [
    {'name': 'iamneo', 'mobile': "12345678" },
    {'name': 'NeoJarvis', 'mobile': "457895575" },
    {'name': 'NeoStark', 'mobile': "c2225584455" }
  ]

  
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