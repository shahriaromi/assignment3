import "dotenv/config";
import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api");

export default app;
