import express, { Application, json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mainApp } from "./mainApp";

dotenv.config();

const app: Application = express();

const port: number = parseInt(process.env.PORT!);

app.use(cors());
app.use(express.json());

mainApp(app);
const server = app.listen(port, () => {
  console.log("connected");
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
