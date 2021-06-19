const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { render } = require("ejs");

const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect mongodb
const dbURI =
  "mongodb+srv://mySelf:mySelf2513@cluster0.t0an1.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews'); if views-s not in views map, but in myviews

//listen for request
// app.listen(3000);

//middlewares
// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// })

// app.use((req, res, next) => {
//   console.log('in the next middleware');
//   next();
// })

// middleware & static files
app.use(express.static("public")); //accessable from the browser (css,img, ...)
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev")); //logger middleware
// app.use(morgan('tiny'));

//mongoose and mongodb sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog3",
//     snippet: "about my new blog3",
//     body: "more about my new blog3",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById('60aceef46292231a349562b2')
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// })

app.get("/", (req, res) => {
  // res.send('<p>home page</p>');
  // res.sendFile('./views/index.html', {root: __dirname})
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });

  res.redirect("/blogs")
});

app.get("/about", (req, res) => {
  // res.send('<p>about page</p>');
  // res.sendFile('./views/about.html', { root: __dirname})
  res.render("about", { title: "About" });
});
//redirect
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// })

//blogs routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root: __dirname})
  res.status(404).render("404.ejs", { title: "404" });
});
