import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

const app: Express = express()
dotenv.config()

//Constants
const { PORT, USER_NAME, USER_PASSWORD, DB_NAME } = process.env

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))

//Routers
app.use('/api/---', () => {})

//Start
const start = async () => {
	try {
		await mongoose.connect(``)

		app.listen(PORT, () => {
			console.log('Server start on port: ' + PORT)
		})
	} catch (error) {
		console.error(error)
	}
}
start()
