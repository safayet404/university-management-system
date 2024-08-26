const express = require('express');
const connectDB = require('./config/connectDB');
const mongoose = require("mongoose")
const session = require('express-session');
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const { notFound, errorHandler } = require('./middleware/errorHandler');
const MongoStore = require('connect-mongo');

const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require('cors')
app.use(session({
    secret: '5f4dcc3b5aa765d61d8327deb882cf99', // Replace with a strong, randomly generated key
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/uims' }),
    cookie: { 
        secure: false,                // Set to true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24 // Session duration in milliseconds (e.g., 1 day)
    }
}));


const adminRouter = require("./routes/adminRoutes")
const assignmentRouter = require("./routes/assignmentRoutes")
const attendanceRouter = require("./routes/attendanceRoutes")
const courseRouter = require("./routes/courseRoutes")
const departmentRouter = require("./routes/departmentRoutes")
const facultyRouter = require("./routes/facultyRoutes")
const noticeRouter = require("./routes/noticeRoutes")
const gradeRouter = require("./routes/gradeRoutes")
const studentRouter = require("./routes/studentRoutes")
const enrollmentRouter = require("./routes/enrollmentRoutes")


connectDB()
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/admin',adminRouter)
app.use('/api/assignment',assignmentRouter)
app.use('/api/attendance',attendanceRouter)
app.use('/api/course',courseRouter)



app.use(cookieParser())
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{{
    console.log(`Server is running at PORT ${PORT} `)

}})