import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Login = () => {
  const [current, setCurrent] = useState("signup");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleToggle = () => {
    setCurrent((prev) => (prev === "login" ? "signup" : "login"));
    setFormData({ name: "", email: "", password: "" }); // Reset fields
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === "signup" && (!formData.name || !formData.email || !formData.password)) {
      toast.error("Please fill all fields")
      return;
    }
    if (current === "login" && (!formData.email || !formData.password)) {
      toast.error("Please fill all fields!");
      return;
    }
    navigate("/tasks"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full max-w-sm p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-white text-2xl font-semibold mb-6"
        >
          {current === "signup" ? "Create an Account" : "Welcome Back"}
        </motion.h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {current === "signup" && (
            <motion.input
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            type="submit"
            className="w-full cursor-pointer p-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            {current === "signup" ? "Sign Up" : "Login"}
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-6 text-gray-400"
        >
          {current === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={handleToggle} className="text-blue-400 cursor-pointer hover:underline">
            {current === "signup" ? "Login" : "Sign Up"}
          </button>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
