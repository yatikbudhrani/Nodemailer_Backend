import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { contact } from "./Routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", contact);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
