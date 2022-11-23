const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

router.post("/verify_account", async (req, res, next) => {
  const { token } = req.body;
 
  jwt.verify(token, process.env.jwt_key, async (err, valid_token) => {
    if (err) {
      res.json({ status: false });
      return;
    }

    const id = valid_token.id;
    const findAccount = await userModel.findById(id);

    if (!findAccount) {
      res.json({ status: false });
      return;
    }

    res.json({
      status: true,
      username: findAccount.username,
      email: findAccount.email,
    });
  });
});

router.post(
  "/login",
  [
    check("username", "Enter username").not().isEmpty(),
    check("password", "Enter password").not().isEmpty(),
  ],
  async (req, res, next) => {
    const { username, password } = req.body;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.json({ error: error.array(), error_type: 0 });
      return;
    }

    const findone = await userModel.findOne({ username: username });

    if (!findone) {
      res.json({ message: "Invalid account", error_type: 1 });
      return;
    }

    await bcrypt.compare(password, findone.password, (err, isValid) => {
      if (isValid) {
        const id = findone._id;
        const token = jwt.sign({ id }, process.env.jwt_key, {
          expiresIn: "7d",
        });

        res
          .cookie("jwt_token", token)
          .status(200)
          .send({ message: "Loggin ", token, created: true });
      } else {
        res.json({ message: "Invalid Account", created: false });
      }
    });
  }
);

router.post(
  "/register",
  [
    check("firstname", "Enter firstname").not().isEmpty(),
    check("surname", "Enter surname").not().isEmpty(),
    check("username", "Enter username").not().isEmpty(),
    check("email", "Enter email").not().isEmpty().isEmail(),
    check("password", "Enter Password").not().isEmpty().isLength({ min: 5 }),
    check("confirm_password", "Confirm Password").not().isEmpty(),
  ],
  async (req, res, next) => {
    const { firstname, surname, email, username, password, confirm_password } =
      req.body;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.json({ error: error.array(), error_type: 0, created: false });
      return;
    }

    const findOne_username = await userModel.findOne({ username: username });
    const findOne_email = await userModel.findOne({ email: email });

    if (findOne_username) {
      res.json({
        message: "Username already exist",
        error_type: 1,
        created: false,
      });
      return;
    }

    if (findOne_email) {
      res.json({
        message: "Email already exist",
        error_type: 1,
        created: false,
      });
      return;
    }

    if (password !== confirm_password) {
      res.json({
        message: "Bith password do not match",
        error_type: 1,
        created: false,
      });
      return;
    }

    const user = new userModel({
      firstname,
      surname,
      email,
      username,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    user.save().then((doc) => {
      const id = doc._id;

      const token = jwt.sign({ id }, process.env.jwt_key, { expiresIn: "7d" });

      res
        .cookie("jwt_token", token)
        .status(201)
        .send({ id, created: true, token, message: "Registered" });
    });
    //res.json({ message: "no error" });
  }
);

module.exports = router;
