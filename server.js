const express = require("express");
const cors = require("cors"); 
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
