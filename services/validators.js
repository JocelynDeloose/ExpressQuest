const validateUser = (req, res, next) => {
  const { firstname, lastname, email, city } = req.body;
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  /* if (firstname == null) {
    return res.status(422).send("The field 'Firstname is required");
  } else if (lastname == null) {
    return res.status(422).send("The field 'Lastname' is required");
  } else if (email == null) {
    return res.status(422).send("The field 'Email' is required");
  } else if (city == null) {
    return res.status(422).send("The field 'city' is required");
  } else {
    next();
  } */

  const errors = [];

  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }

  if (firstname == null) {
    errors.push({ field: "firstname", message: " This field is required" });
  }
  if (lastname == null) {
    errors.push({ field: "lastname", message: "This field is required" });
  }
  if (email == null) {
    errors.push({ field: "email", message: "this field is required" });
  }
  if (city == null) {
    errors.push({ field: "city", message: "This field is required" });
  }
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next()
  }
};

const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;
  const errors = [];
  if (title == null) {
    errors.push({ field: "title", message: " This field is required" });
  }
  if (director == null) {
    errors.push({ field: "director", message: " This field is required" });
  }
  if (year == null) {
    errors.push({ field: "year", message: " This field is required" });
  }
  if (color == null) {
    errors.push({ field: "color", message: " This field is required" });
  }
  if (duration == null) {
    errors.push({ field: "duration", message: " This field is required" });
  }
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next()
  }
};

module.exports = { validateUser, validateMovie }