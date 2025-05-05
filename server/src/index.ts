import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./config/db";
import keySignaturesRouter from "./routes/keySignatures";


const app = express();
app.use(cors());

app.use(express.json()); // Middleware to parse JSON


app.use("/key_signatures", keySignaturesRouter);




app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.message);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

app.get("/", (req: Request, res: Response) => {
  res.send({ test: "test" });
});

connect();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server connected to http://localhost:${PORT}`);
});
