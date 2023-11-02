require("dotenv").config(); //added
const folderRoutes = require("./routes/folderRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db"); //added

const app = express();

connectDB(); //added

// initialize middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => res.send("Server up and running"));

// setting up port
const PORT = process.env.PORT || 8000;

app.use("/api", folderRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
