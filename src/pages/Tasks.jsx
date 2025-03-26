import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { motion } from "framer-motion";

const Tasks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-200">Task Manager</h1>
      <div className="w-full max-w-lg space-y-6">
        <TaskInput />
        <TaskList />
      </div>
    </motion.div>
  );
};

export default Tasks;
