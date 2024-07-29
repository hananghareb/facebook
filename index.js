import express from 'express'
import dbconnection from './database/connection.js';
import userrouter from './modules/users/user.routes.js'
import postrouter from './modules/posts/post.routes.js'
import commentrouter from './modules/comments/comment.routes.js'
const app = express()
const port = process.env.port || 3000
app.use(express.json())


app.use(userrouter)
app.use(postrouter)
app.use(commentrouter)
dbconnection


app.listen(port, () => console.log(`Example app listening on port ${port}!`))





















