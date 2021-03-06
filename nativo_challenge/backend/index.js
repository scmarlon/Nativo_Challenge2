const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")



const { f1, f2 } = require('./models/links')

// DataBase
const mongoose = require('mongoose');

const user ='MarlonSac';
const password = 'marlon1221'
const dbname = 'nativoDB'
const uri = `mongodb+srv://${user}:${password}@cluster0.yiuar.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri,
	{useNewUrlParser: true}
)
	.then(()=> console.log('DB Working'))
	.catch(e=> console.log(e))
;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})
app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home page")
})

app.post("/post_link", async (req, res) => {
	let { link } = req.body
	console.log(link)
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
	console.log(f1,f2)
})