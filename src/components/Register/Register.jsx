import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Input from "../../common/Input/Input";
import SelectField from "../../common/SelectField/SelectField";
import Buttons from "../../common/Buttons/Buttons";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const roles = [
    "Founder",
    "Co-Founder",
    "Employee",
    "Marketing",
    "HR",
    "Developer",
  ];

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      mobile,
      email,
      bloodGroup,
      dob,
      password,
      role,
    };

    try {
      const response = await axios.post(
        "https://example.com/api/register",
        userData
      );
      if (response.status === 201) {
        Swal.fire("Success", "User registered successfully!", "success").then(
          () => {
            navigate("/list-employee");
          }
        );
      }
    } catch (error) {
      console.error("Error registering user:", error);
      Swal.fire("Error", "There was an issue registering the user.", "error");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register Employee
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="firstName"
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              required
            />
            <Input
              id="lastName"
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              required
            />
            <Input
              id="mobile"
              label="Mobile Number"
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              required
            />
            <Input
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
            <SelectField
              id="bloodGroup"
              label="Blood Group"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              options={bloodGroups}
              required
            />
            <Input
              id="dob"
              label="Date of Birth"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <SelectField
              id="role"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              options={roles}
              required
            />
          </div>
          <div className="flex justify-between mt-6">
            <Buttons type="button" onClick={handleBack} color="black">
              Back
            </Buttons>
            <Buttons type="submit" color="green">
              Register
            </Buttons>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
