module.exports = {
  indexController: (req, res) => {
    res.render("index");
  },

  aboutController: (req, res) => {
    res.render("about");
  },

  homeController: (req, res) => {
    res.render("home");
  },
};
