import express from 'express'
import { UpdateData } from './GetUserSchema.js'

const UpdateApi = express.Router()

UpdateApi.post('/update/:index', (req, res) => {
    try {
        const id = req.params.index
        console.log(id);

        const { data } = req.body
        console.log(data);
        const result = UpdateData(id, data)
        res.json(data.UpdateData)
        return result
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default UpdateApi


// UPDATE API FOR USE
// `http://localhost:3080/update/${id}`, { data: { updateData: formData } }