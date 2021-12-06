const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const app = express();
const port = 3000;
require('dotenv').config();
const { User } = require('./models')

app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const indexRouter = require('./controllers/index')
const homeRouter = require('./controllers/home')
const signupRouter = require('./controllers/signup')
const registerRouter = require('./controllers/register')
const signoutRouter = require('./controllers/signout')
const loginRouter = require('./controllers/login')
const peepsRouter = require('./controllers/peeps')

app.use(session({
  secret: 'super top secret',
  resave: false,
  saveUninitialized: true,
}))

app.use(async (req, res, next) => {
  if (req.session.userId) {
    res.locals.currentUser = await User.findOne({
      where: {
        id: req.session.userId
      }
    })
  } else {
    res.locals.currentUser = undefined
  }
  res.locals.errors = []
  next()
})

app.use('/', indexRouter)
app.use('/home', homeRouter)
app.use('/signup', signupRouter)
app.use('/register', registerRouter)
app.use('/signout', signoutRouter)
app.use('/login', loginRouter)
app.use('/peeps', peepsRouter)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})