const db = require("../config/db");

const Task = {
  create: async (userId, title, category, deadline, status) => {
    const [result] = await db.promise().query(
      "INSERT INTO tasks (user_id, title, category, deadline, status) VALUES (?, ?, ?, ?, ?)",
      [userId, title, category, deadline, status]
    );
  },
  findAllByUserId: async (userId) => {
    const [rows] = await db.promise().query("SELECT * FROM tasks WHERE user_id = ?", [userId]);
    return rows;
  },
  update: async (taskId, title, category, deadline, status, completed) => {
    "UPDATE tasks SET title = ?, category = ?, deadline = ?, status = ?, completed = ? WHERE id = ?",
    [title, category, deadline, status, completed, taskId]
  }, 
  delete: async (taskId) => {
    await db.promise().query("DELETE FROM tasks WHERE id = ?", [taskId]);
  },
};

module.exports = Task;
