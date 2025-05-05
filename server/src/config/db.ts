import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

export const db = client.db("music-theory-game");

export const connect = async () => {
  try {
    await client.connect();
    console.log("Connected to db");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw new Error("Database connection failed"); // Throw the error to propagate it
  }
};
