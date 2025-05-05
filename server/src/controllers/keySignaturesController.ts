import { db } from "../config/db";
import { NextFunction, Request, Response } from "express";

const keySignaturesCollection = db.collection("key_signatures");


// GET PRODUCTS
export const getAllKeys = async (_, res: Response, next: NextFunction) => {
    try {
      const keySignatures = await keySignaturesCollection.find().toArray();
      res.send(keySignatures);
    } catch (error) {
      next(new Error(`Failed to fetch products: ${error.message}`)); 
    }
  };