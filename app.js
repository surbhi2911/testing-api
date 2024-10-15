import express from 'express'
import cors from 'cors'
import MongoDB from './MongoDB/MongoDBConnect.js'
import Index from './GetApi.js/GetApi.js'
MongoDB()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', Index)

const PORT = 3080

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})