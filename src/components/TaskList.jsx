import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.todos.items);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full max-w-md mx-auto mt-6 space-y-4 bg-gray-900 p-6 rounded-xl shadow-lg"
    >
      {tasks.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-400"
        >
          No tasks available.
        </motion.p>
      ) : (
        <AnimatePresence>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default TaskList;
