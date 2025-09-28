import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();

const corsOption = {
  origin: ["http://localhost:5173", "https://tudominio.vercel.app"],
};

app.use(cors(corsOption));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

export const handler = serverless(app);
