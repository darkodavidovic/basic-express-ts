
import express, { Application } from 'express'
import cookieParser from "cookie-parser"
import cors from 'cors'
import privateRouter from './routes/private'
import publicRouter from './routes/public'
import chalk from 'chalk';

const app: Application = express()

const PORT = 8888

app.use(cors({
	origin: "*"
}))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use('/pdfxml/api', publicRouter)
app.use('/pdfxml/api', privateRouter)

app.listen(PORT, () => {
	console.log(
		chalk.white.bold.bgBlue(`GraphQL http://localhost:${PORT}/pdfxml/api/graphql'`) + chalk.black.bgGreenBright(' Started!')
	)
	console.log(
		chalk.white.bold.bgBlue(`API http://localhost:${PORT}/pdfxml/api/'`) + chalk.black.bgGreenBright(' Started!')
	)
})