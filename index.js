const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


// Routes for teacher
app.get('/teacher/login', (req, res) => {
  res.render('tlogin');
});

app.post('/teacher/login', (req, res) => {
  const { email, password } = req.body;
  const teacher = teachers.find(t => t.email === email && t.password === password);
  if (teacher) {
    res.send('Teacher logged in successfully');
  } else {
    res.send('Invalid email or password');
  }
});

app.get('/teacher/signup', (req, res) => {
  res.render('tsignup');
});

app.post('/teacher/signup', (req, res) => {
  const { email, password } = req.body;
  teachers.push({ email, password });
  res.send('Teacher signed up successfully');
});

// Routes for student
app.get('/student/login', (req, res) => {
  res.render('login');
});

app.post('/student/login', (req, res) => {
  const { email, password } = req.body;
  const student = students.find(s => s.email === email && s.password === password);
  if (student) {
    res.send('Student logged in successfully');
  } else {
    res.send('Invalid email or password');
  }
});

app.get('/student/signup', (req, res) => {
  res.render('signup');
});

app.post('/student/signup', (req, res) => {
  const { email, password } = req.body;
  students.push({ email, password });
  res.send('Student signed up successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
