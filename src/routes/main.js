const { response } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const Contact = require("../models/Contact");

const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Servics");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "637039cb56806584439ea250" });
  const slides = await Slider.find();

  const services = await Service.find();

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "637039cb56806584439ea250" });
  res.render("gallery", {
    details: details,
  });
});
routes.post("/process-contact-form", async (req, res) => {
  console.log(req.body);

  try {
    const data = await Contact.create(req.body);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

module.exports = routes;
