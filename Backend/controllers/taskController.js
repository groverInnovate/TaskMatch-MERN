import Task from '../models/Task.js';

// Get All Tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create New Task
export const createTask = async (req, res) => {
  console.log("🔥 Received Request Body:", req.body);  // 👉 Log the request body

  try {
    const { title, description, deadline, price } = req.body;

    // Check if all fields are present
    if (!title || !description || !deadline || !price) {
      console.log("❌ Missing fields:", { title, description, deadline, price });
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTask = new Task({
      title,
      description,
      deadline,
      price,
    });

    const savedTask = await newTask.save();
    console.log("✅ Task saved successfully:", savedTask);  // 👉 Log the saved task

    res.status(201).json(savedTask);
  } catch (error) {
    console.error("🚨 Error saving task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    console.log("✅ Task updated:", updatedTask);
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    console.log("✅ Task deleted:", deletedTask);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

