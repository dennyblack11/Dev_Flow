import { Application, Request, Response } from "express";

export const mainApp = (app: Application) => {
  try {
    app.get("/", (req: Request, res: Response) => {});
  } catch (error) {}
};
