const { Skor } = require("./models");

Skor.create({
  username: "niki",
  skor: 16,
}).then((article) => console.log(article));
