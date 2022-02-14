const { User } = require("../models");
const { Skor } = require("../models");
const passport = require("../lib/passport");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  register: (req, res, next) => {
    // Kita panggil static method register yang sudah kita buat tadi
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },

  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true, // Untuk mengaktifkan express flash
  }),

  akun: (req, res) => {
    User.authenticate(req.body).then((user) => {
      res.json(format(user));
    });
  },

  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },

  data: (req, res) => {
    User.findAll().then((a) => res.render("data", { a }));
  },
  show: (req, res) => {
    User.findOne({
      where: { id: req.params.id },
    }).then((a) => res.render("show", { a }));
  },

  skor: (req, res) => {
    Skor.findAll().then((a) => {
      res.status(200).json(a);
    });
  },
  goal: (req, res) => {
    Skor.findOne({
      where: { id: req.params.id },
    }).then((a) => {
      res.status(200).json(a);
    });
  },

  selamat: (req, res) => {
    User.update(
      {
        username: req.body.username,
        password: req.body.password,
      },
      { where: { id: req.params.id } }
    )
      .then((article) => {
        res.status(201).json(article);
      })
      .catch((err) => {
        res.status(422).json("You can't update the data");
      });
  },

  datang: (req, res) => {
    Skor.update(
      {
        username: req.body.username,
        skor: req.body.skor,
      },
      { where: { id: req.params.id } }
    )
      .then((article) => {
        res.status(201).json(article);
      })
      .catch((err) => {
        res.status(422).json("You can't update the data");
      });
  },

  kalian: (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then((a) => {
      res.status(200).json(a);
    });
  },
  semua: (req, res) => {
    Skor.destroy({ where: { id: req.params.id } }).then((a) => {
      res.status(200).json(a);
    });
  },
};
