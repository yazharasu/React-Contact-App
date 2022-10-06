import React from 'react';
import './List.css';

const List = ( { name, mobile }) => {

  return (
    <div className='list-container'>
        <div className='name'>
           {name} 
        </div>

        <div className='mobileNo'>
           {mobile} 
        </div>

        <div className='del'>
           Delete
        </div>
    </div>
  )
}

export default List