import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ActionButtons = ({ onEdit, onView, onDelete }) => {
  const handleAction = (action, label) => {
    Swal.fire({
      title: `Are you sure you want to ${label}?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then(result => {
      if (result.isConfirmed) {
        action();
      }
    });
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => handleAction(onView, 'view')} className="text-blue-500 hover:text-blue-700">
        <FaEye />
      </button>
      <button onClick={() => handleAction(onEdit, 'edit')} className="text-green-500 hover:text-green-700">
        <FaEdit />
      </button>
      <button onClick={() => handleAction(onDelete, 'delete')} className="text-red-500 hover:text-red-700">
        <FaTrash />
      </button>
    </div>
  );
};

export default ActionButtons;
