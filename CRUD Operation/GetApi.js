import express from "express";
import { Getdata } from "./GetUserSchema.js";


const Index = express.Router()

Index.get('/', async (req, res, next) => {
    const data = await Getdata()
    res.send(data);
});

export default Index



// GET_DATA API FOR USE
// {'http://localhost:3080/'}
