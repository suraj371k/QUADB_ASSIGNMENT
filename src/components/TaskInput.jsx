import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todoSlice";
import { TextField, Button, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(
      addTask({ id: Date.now(), text: task, priority, completed: false }),
      toast.success("Task Added Successfully")
    );
    setTask("");
    setPriority("Medium");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col mt-20 gap-4 p-6 bg-gray-800 border border-gray-600 shadow-lg rounded-xl w-full max-w-md mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-center text-xl font-semibold"
      >
        Add a New Task
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          InputLabelProps={{ style: { color: "#bbb" } }} 
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#555" }, 
              "&:hover fieldset": { borderColor: "#888" }, 
              "&.Mui-focused fieldset": { borderColor: "#4A90E2" },
            },
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <TextField
          select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#bbb" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#888" },
              "&.Mui-focused fieldset": { borderColor: "#4A90E2" },
            },
          }}
        >
          {["High", "Medium", "Low"].map((level) => (
            <MenuItem key={level} value={level} className="text-white bg-gray-900">
              {level}
            </MenuItem>
          ))}
        </TextField>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={handleAddTask}
          sx={{
            backgroundColor: "#4A90E2",
            "&:hover": { backgroundColor: "#357ABD" },
            color: "#fff",
            padding: "10px 0",
            fontSize: "16px",
          }}
        >
          Add Task
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default TaskInput;
