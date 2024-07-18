import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import Input from "../../common/Input/Input";
import Button from "../../common/Buttons/Buttons";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get("/data.json");
      const users = response.data;
      const user = users.find(
        (u) => u.mobile === mobile && u.password === password
      );

      if (user) {
        login(user);
        Swal.fire("Success", "Logged in successfully!", "success").then(() => {
          navigate("/details", { state: user });
        });
      } else {
        Swal.fire("Error", "Invalid mobile number or password", "error");
      }
    } catch (error) {
      console.error("There was an error!", error);
      Swal.fire("Error", "An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
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
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <div className="flex justify-center">
            <Button type="submit" size="medium">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
