import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { state } = useLocation();
  const {
    id,
    firstName,
    lastName,
    mobile,
    bloodGroup,
    dateOfBirth,
    role,
    email,
    profilePhoto,
  } = state || {};
  const navigate = useNavigate();

  if (!state) {
    return <div>No user details available. Please login first.</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be redirected to the Work Details page.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/work-details", { state });
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-3/4 p-8 bg-white rounded-lg shadow-lg relative">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg opacity-20"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/random/800x600")',
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            User Details
          </h2>
          <div className="bg-gradient-to-r from-green-300 to-blue-500 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md"
              />
              <div className="text-2xl font-semibold text-white mt-4">
                {firstName} {lastName}
              </div>
              <div className="text-lg text-white">{role}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">User ID:</span>
                  <span className="text-gray-900">{id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Full Name:</span>
                  <span className="text-gray-900">
                    {firstName} {lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Mobile Number:
                  </span>
                  <span className="text-gray-900">{mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="text-gray-900">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Blood Group:
                  </span>
                  <span className="text-gray-900">{bloodGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Date of Birth:
                  </span>
                  <span className="text-gray-900">{dateOfBirth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Role:</span>
                  <span className="text-gray-900">{role}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
