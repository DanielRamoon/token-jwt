import express from "express";
import publicRoutes from "./routes/piblic.js";
import privateRoutes from "./routes/private.js";
import authenticateToken from "./middlewares/auth.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", publicRoutes);
app.use("/", authenticateToken, privateRoutes);

app.listen(PORT, () => {
  console.log(`Servidor Rodando na: ${PORT}`);
});
