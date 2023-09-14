const express = require('express')
const path = require('path')

const expressLayouts = require('express-ejs-layouts')

const app = express()

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs')
app.use(expressLayouts)


app.use(express.static(path.join(__dirname, 'public')))

// utilizar routes
const router = require('./routes/router');
app.use('/', router);




app.listen(3000, ()=>{
    console.log('hola http://localhost:3000')
})