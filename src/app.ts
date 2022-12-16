import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/test", (req: Request, res: Response) => {
  return res.json({
    message: "Funcionando",
  });
});

export default app;
