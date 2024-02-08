import React from 'react';
import axios from 'axios'

const UserActions = ({ userId, onRestore, onForceDelete }) => {
    console.log(userId)
    const handleRestore = () => {
        fetch(`/user/restore/${userId}`, {
          method: 'GET',
        })
          .then(response => {
            if (response.ok) {
              console.log('Usuario restaurado');
              onRestore(); 
              window.location.href = '/Logged';
            } else {
            }
          })
          .catch(error => {
          });
      };
      

      const handleForceDelete = () => {
        fetch(`/user/deleted/${userId}`, {
            method: 'delete',
        })
          window.location.href = '/Bezeroak';
          window.location.reload();
        
    };
    

  return (
    <div>
      <button onClick={handleRestore} className='btn btn-dark' style={{ marginRight: '2%' }}>Errekuperatu</button>
      <button onClick={handleForceDelete} className='btn btn-dark'>Ezabatu</button>
    </div>
  );
};

export default UserActions;
