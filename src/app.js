require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Servics = require("./models/Servics");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use("", routes);

//(template engine)
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//db connection
mongoose.connect(process.env.MONGOURI, () => {
  console.log("Database connected");

  // Servics.create(
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide Best Courses",
  //     desc: "We Provide courses that helps our students in learing",
  //     linkText: "https://www.google.com",
  //     link: "Check",
  //   },
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide Best Courses",
  //     desc: "We Provide courses that helps our students in learing",
  //     linkText: "https://www.google.com",
  //     link: "Check",
  //   },
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide Best Courses",
  //     desc: "We Provide courses that helps our students in learing",
  //     linkText: "https://www.google.com",
  //     link: "Check",
  //   }
  // );

  //   Slider.create([{
  //     title:'Learn Java in a very easy manner',
  //     subTitle:"Some text",
  //     imagUrl:"/static/images/Slider1.jpg",
  //     class:"active"

  //   },{
  //     title:'Learn Java in a very easy manner',
  //     subTitle:"Some more text",
  //     imagUrl:"/static/images/Slider2.jpg",
  //     class:""
  //   },{
  //     title:'Learn Java in a very easy manner',
  //     subTitle:"Some more more text",
  //     imagUrl:"/static/images/Slider3.jpg",
  //     class:""
  //   },
  // ]);

  // Detail.create({
  //   brandName: "Direct It Solutions",
  //   brandIconUrl: "/static/images/DSol-crop.png",
  //   links: [
  //     {
  //       label: "Home",
  //       url: "/",
  //     },
  //     {
  //       label: "Services",
  //       url: "/#services",
  //     },
  //     {
  //       label: "Gallery",
  //       url: "/gallery",
  //     },
  //     {
  //       label: "About",
  //       url: "/#about",
  //     },
  //     {
  //       label: "Contact Us",
  //       url: "/#contact-us",
  //     },
  //   ],
  // });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
