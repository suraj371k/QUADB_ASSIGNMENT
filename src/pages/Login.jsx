import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [current, setCurrent] = useState("signup");

  const handleToggle = () => {
    setCurrent((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <Box className="flex  justify-center items-center min-h-screen bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Paper
          elevation={8}
          className="p-8 rounded-xl w-96 max-w-sm bg-gray-800 shadow-lg border border-gray-700"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography
              variant="h5"
              className="text-center font-semibold mb-6 text-white"
            >
              {current === "signup" ? "Create an Account" : "Welcome Back"}
            </Typography>
          </motion.div>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            noValidate
            autoComplete="off"
          >
            {current === "signup" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  required
                  fullWidth
                  InputLabelProps={{ className: "text-gray-400" }}
                  sx={{ "& .MuiOutlinedInput-root": { color: "#fff" } }}
                />
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ className: "text-gray-400" }}
                sx={{ "& .MuiOutlinedInput-root": { color: "#fff" } }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ className: "text-gray-400" }}
                sx={{ "& .MuiOutlinedInput-root": { color: "#fff" } }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to={"/tasks"}>
                <Button variant="contained" color="primary" fullWidth>
                  {current === "signup" ? "Sign Up" : "Login"}
                </Button>
              </Link>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Typography variant="body2" className="text-center mt-6 text-gray-400">
              {current === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <Button onClick={handleToggle} color="secondary">
                {current === "signup" ? "Login" : "Sign Up"}
              </Button>
            </Typography>
          </motion.div>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;
