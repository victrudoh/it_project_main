const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { sequelize } = require("./models");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.set("view engine", "ejs"); // template engine
app.set("views", path.join(__dirname, "views")); // setting views directory
app.use(express.static(path.join(__dirname, "public"))); // static files directory

const indexRouter = require("./routes/index.routes");
const studentsRouter = require("./routes/students.routes");
const authRouter = require("./routes/auth.routes");
const coursesRouter = require("./routes/courses.routes");
const pricingRouter = require("./routes/pricing.routes");
const FAQSRouter = require("./routes/FAQS.routes");
const galleryRouter = require("./routes/gallery.routes");

app.use("/", indexRouter);
app.use("/students", studentsRouter);
app.use("/auth", authRouter);
app.use("/courses", coursesRouter);
app.use("/pricing", pricingRouter);
app.use("/FAQS", FAQSRouter);
app.use("/gallery", galleryRouter);



app.listen(port, () => {
  sequelize.sync().then(() => {
    console.log(`Server running on ${port}`);
  });
});
