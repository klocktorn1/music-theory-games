import express from "express";
import { getAllKeys } from "../controllers/keySignaturesController.ts";
const router = express.Router();

router.get("/", getAllKeys);


export default router;
