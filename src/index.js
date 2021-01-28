const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'))//http logger

app.engine('hbs', exphbs({
  extname: '.hbs'
}));//template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'))
//route
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
})
app.get('/search', (req, res) => {
  res.render('search');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})