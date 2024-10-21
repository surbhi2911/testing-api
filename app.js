import express from 'express'
import cors from 'cors'
import MongoDB from './MongoDB/MongoDBConnect.js'
import Index from './CRUD Operation/GetApi.js'
import PostApi from './CRUD Operation/PostApi.js'
import DeleteApi from './CRUD Operation/DeleteApi.js'
import UpdateApi from './CRUD Operation/UpdateApi.js'

MongoDB()

const app = express()
app.use(cors())

app.use(express.json())

app.use('/', Index)
app.use('/', PostApi)
app.use('/', DeleteApi)
app.use('/', UpdateApi)

const PORT = 3080

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})