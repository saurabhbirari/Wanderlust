const wrapAsync = require("../utils/wrapAsync");
const User=require("../models/user");

module.exports.renderSignupForm = (req, res) => {
  res.render("../views/users/signup.ejs");
};

module.exports.renderLoginForm = (req, res) => {
  res.render("../views/users/login.ejs");
};

module.exports.signup = wrapAsync(async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registedUser = await User.register(newUser, password);
    req.login(registedUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "User registered successfully");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});

module.exports.login = async (req, res) => {
  req.flash("success", "welcome to Wanderlust! you're logged in");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You're logged out now!");
    res.redirect("/listings");
  });
};
