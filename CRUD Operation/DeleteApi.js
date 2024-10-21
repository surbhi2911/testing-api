import express from 'express';
import { DeleteData } from './GetUserSchema.js'; // Assuming DeleteData is a function that handles the deletion logic in your database
const DeleteApi = express.Router();

DeleteApi.delete('/delete/:id', async (req, res) => {
    const { id } = req.params; // Extract the ID from the URL parameter

    try {
        const result = await DeleteData(id); // Call your function to delete the data by ID
        console.log(result);

        if (result) {
            return res.status(200).json({ message: 'User deleted successfully' });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ error: 'An error occurred while deleting the user' });
    }
});

export default DeleteApi;
