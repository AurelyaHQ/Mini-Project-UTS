const db = require("../config/db");

const Task = {
  create: async (userId, title, category) => {
    const [result] = await db.promise().query("INSERT INTO tasks (user_id, title, category) VALUES (?, ?, ?)", [userId, title, category]);
    return result.insertId;
  },
  findAllByUserId: async (userId) => {
    const [rows] = await db.promise().query("SELECT * FROM tasks WHERE user_id = ?", [userId]);
    return rows;
  },
  update: async (taskId, title, category, completed) => {
    await db.promise().query("UPDATE tasks SET title = ?, category = ?, completed = ? WHERE id = ?", [title, category, completed, taskId]);
  },
  delete: async (taskId) => {
    await db.promise().query("DELETE FROM tasks WHERE id = ?", [taskId]);
  },
};

module.exports = Task;
