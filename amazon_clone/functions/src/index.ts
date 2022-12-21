// import * as functions from "firebase-functions";
const functions = require("firebase-functions");
// import express from "express";
const express = require("express");
const cors = require("cors")
const SECRET_KEY = ""
const stripe = require("stripe")(
  SECRET_KEY
)

const app = express();

app.use(cors({origin : true}));
app.use(express.json());

app.get("/", (req, res:any)=>{return res.status(200).send("안녕")})

exports.api = functions.https.onRequest(app);
// const express = require("express");