
// const GetData = () => {
//     app.get('/api/users', async (req, res) => {
//         try {
//             const users = await User.find(); // Fetch all users
//             res.json(users); // Return users in JSON format
//         } catch (err) {
//             res.status(500).send('Error retrieving users');
//         }
//     });
// }
import express from "express";
import { Getdata } from "./GetUserSchema.js";


const Index = express.Router()

Index.get('/', async (req, res, next) => {
    const data = await Getdata()
    res.send(data);

});
export default Index