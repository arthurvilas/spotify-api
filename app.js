require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();
const mongoose = require("mongoose");

// Middleware
// const errorHandler = require("./middleware/errorHandler");
app.use(express.json());

// Routes
const userRoutes = require("./routes/user");
const playlistsRoutes = require("./routes/playlists");
const songsRoutes = require("./routes/songs");
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/playlists", playlistsRoutes);
app.use("/api/v1/songs", songsRoutes);

// Erro
// app.use(errorHandler);

const port = process.env.PORT || 8080;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado com DB...");
    app.listen(port, () => console.log(`Escutando na porta ${port}...`));
  } catch (error) {
    console.log(error.message);
  }
};
start();
