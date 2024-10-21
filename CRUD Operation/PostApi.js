import express from 'express'
import { PostData } from './GetUserSchema.js'

const PostApi = express.Router()

PostApi.post('/post', async (req, res) => {
    try {
        const data = await req.body
        const result = await PostData(data)
        // console.log(result);
        res.json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})

export default PostApi


// ADD DATA API FOR USE
// {'http://localhost:3080/post', obj}