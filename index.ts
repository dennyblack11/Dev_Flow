import express, { Application, json } from "express";
import cors from "cors";
import env from "dotenv";

const app: Application = express();

const port: number = parseInt(process.env.PORT!);

app.use(cors());
app.use(json());

const server = app.listen(port, () => {});

process.on("uncaughtException", (error: Error) => {
  console.log(error);
  process.exit(1);
});

process.on("unhandledRejection", (error: Error) => {
  console.log(error);
  process.exit(1);
});
