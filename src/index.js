const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const eventRouter = require("./routes/eventRoutes");

const app = express();
const port = 3900;

// Conectar ao MongoDB
const mongoDBUrl =
  "mongodb+srv://pelcio:NIePVq9nql0kRQJJ@cluster0.sczhznk.mongodb.net/node-api";
mongoose
  .connect(mongoDBUrl)
  .then(() => console.log("Conexão com MongoDB estabelecida com sucesso!"))
  .catch((err) => console.error("Falha na conexão com MongoDB:", err));

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", eventRouter);

app.listen(port, () => {
  console.log("EXECUTEI MEU EXPRESS");
});
