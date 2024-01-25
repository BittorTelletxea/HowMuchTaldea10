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
          window.location.href = '/';
        
    };
    

  return (
    <div>
      <button onClick={handleRestore}>Restaurar Usuario</button>
      <button onClick={handleForceDelete}>Eliminar Forzadamente</button>
    </div>
  );
};

export default UserActions;
