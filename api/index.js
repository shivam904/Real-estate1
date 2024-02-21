import express from "express";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const db= new pg.Client({
    user: "postgres",
  host:"localhost",
  database: "Real-estate",
  password: "Kingshiva@1234",
  port: 5432,
});
db.connect();
const app= express();

const port= 3000;

app.listen(port, ()=>{
    console.log(`server is running on : ${port}`);
});