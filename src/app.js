const express = require('express')
require('./db/conn')
const path = require("path")
const hbs = require("hbs")

const multer = require("multer")

// const uploadMiddleware = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'public')
//         },
//         filename: function (req, file, cb) {
//             // console.log(file);
//             cb(null, Date.now() + '-' + file.originalname)
//         }
//     })
// }).single('file_uploadname');


// const bodyParser = require('body-parser')

const User = require("../src/models/schema")

const app = express()

const port = process.env.PORT || 3000

// setting the path
const staticpath = path.join(__dirname, "../public")
const imagesPath = path.join(__dirname, "../public/images")
const viewPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
// Middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/")))
app.use('/img', express.static(imagesPath))
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
const upload = multer();
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

// To use static pages from public folder.
// app.use(express.static(staticpath))

// Setting the view engine and partials
app.set('view engine', 'hbs');
app.set("views", viewPath)
hbs.registerPartials(partialsPath)
// Handlebars.registerHelper('trimString', function(passedString) {
//     var theString = passedString.substring(0,150);
//     return new Handlebars.SafeString(theString)
// });


app.get('/', (req, res) => {
    res.render("index");
})

app.get('/gallery', (req, res) => {
    res.render("gallery");
})

app.get('/contact', (req, res) => {
    res.render("contact");
})

app.get('/list-messages', (req, res) => {
    User.find().
        then((usrs) => {
            console.log(usrs)
            res.status(201).render("list-messages", { data: usrs })
        }).catch((err) => {
            res.status(400).send("Error in getting list of msgs" + err)
        })
})

app.post('/contactpost', upload.none(), async (req, res) => {
    try {
        console.log(req.body.name)
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log(`Server started on port number: ${port} `)
});