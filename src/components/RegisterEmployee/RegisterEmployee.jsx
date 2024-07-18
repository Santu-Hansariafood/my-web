import React, { useState, useEffect } from 'react';
import Table from '../../common/Table/Table';
import Pagination from '../../common/Pagination/Pagination';
import ActionButtons from '../../common/ActionButtons/ActionButtons';
import Buttons from '../../common/Buttons/Buttons';
import Swal from 'sweetalert2';

const RegisterEmployee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (item) => {
    Swal.fire({
      title: 'Edit Employee',
      html: `
        <input id="edit-firstName" class="swal2-input" placeholder="First Name" value="${item.firstName}">
        <input id="edit-lastName" class="swal2-input" placeholder="Last Name" value="${item.lastName}">
        <input id="edit-mobile" class="swal2-input" placeholder="Mobile" value="${item.mobile}">
        <input id="edit-email" class="swal2-input" placeholder="Email" value="${item.email}">
        <input id="edit-bloodGroup" class="swal2-input" placeholder="Blood Group" value="${item.bloodGroup}">
        <input id="edit-dateOfBirth" class="swal2-input" placeholder="Date Of Birth" value="${item.dateOfBirth}">
        <input id="edit-role" class="swal2-input" placeholder="Role" value="${item.role}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Save',
      preConfirm: () => {
        const editedItem = {
          ...item,
          firstName: document.getElementById('edit-firstName').value,
          lastName: document.getElementById('edit-lastName').value,
          mobile: document.getElementById('edit-mobile').value,
          email: document.getElementById('edit-email').value,
          bloodGroup: document.getElementById('edit-bloodGroup').value,
          dateOfBirth: document.getElementById('edit-dateOfBirth').value,
          role: document.getElementById('edit-role').value,
        };
        setData(data.map(d => (d.id === item.id ? editedItem : d)));
      }
    });
  };

  const handleView = (item) => {
    Swal.fire({
      title: 'View Item',
      html: `
        <p><strong>First Name:</strong> ${item.firstName}</p>
        <p><strong>Last Name:</strong> ${item.lastName}</p>
        <p><strong>Mobile:</strong> ${item.mobile}</p>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>Blood Group:</strong> ${item.bloodGroup}</p>
        <p><strong>Date of Birth:</strong> ${item.dateOfBirth}</p>
        <p><strong>Role:</strong> ${item.role}</p>
      `,
      showCancelButton: false,
      confirmButtonText: 'Close',
    });
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        setData(data.filter(d => d.id !== item.id));
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="p-4">
      <Table
        columns={[
          { header: 'ID', accessor: 'id' },
          { header: 'First Name', accessor: 'firstName' },
          { header: 'Last Name', accessor: 'lastName' },
          { header: 'Mobile', accessor: 'mobile' },
          { header: 'Blood Group', accessor: 'bloodGroup' },
          { header: 'Date of Birth', accessor: 'dateOfBirth' },
          { header: 'Role', accessor: 'role' },
          { header: 'Email', accessor: 'email' },
          { header: 'Profile Photo', accessor: 'profilePhoto' },
        ]}
        data={currentData}
        actions={(item) => (
          <ActionButtons
            onEdit={() => handleEdit(item)}
            onView={() => handleView(item)}
            onDelete={() => handleDelete(item)}
          />
        )}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <div className="mt-4">
        <Buttons color="black" onClick={() => window.history.back()}>Back</Buttons>
      </div>
    </div>
  );
};

export default RegisterEmployee;
