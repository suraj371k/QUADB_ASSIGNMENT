import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/todoSlice";
import { FaTrash } from "react-icons/fa";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const priorityColors = {
    High: "bg-red-400 border-red-500",
    Medium: "bg-yellow-600 border-yellow-500",
    Low: "bg-green-600 border-green-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`flex justify-between items-center p-4 bg-gray-800 border-l-4 shadow-md rounded-xl border-opacity-50 transition-all duration-300 ${priorityColors[task.priority]}`}
    >
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-white text-lg font-semibold"
        >
          {task.text}
        </motion.h3>
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={`text-sm text-white px-2 py-1 rounded ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </motion.span>
      </div>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-red-700 hover:text-red-900 cursor-pointer transition duration-300"
      >
        <FaTrash size={20} />
      </motion.button>
    </motion.div>
  );
};

export default TaskItem;
