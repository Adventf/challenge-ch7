const router = require("express").Router();
const auth = require("./controllers/authControllers");
const restrict = require("./middlewares/restrict");

router.get("/", restrict, (req, res) => res.render("home"));
router.get("/api/v1/auth/whoami", restrict, auth.whoami);
router.get("/play", (req, res) => res.render("play"));
router.get("/about", (req, res) => res.render("about", { title: "about" }));
router.get("/help", (req, res) => res.render("help", { title: "help" }));

router.get("/register", (req, res) =>
  res.render("register", { title: "form register" })
);
router.post("/register", auth.register);

router.get("/login", (req, res) =>
  res.render("login", { title: "form login" })
);
router.post("/api/v1/auth/login", auth.akun);
router.post("/login", auth.login);

router.get("/data", auth.data);
router.get("/data/:id", auth.show);
router.get("/skor", auth.skor);
router.get("/skor/:id", auth.goal);

router.put("/login/:id", auth.selamat);
router.put("/skor/:id", auth.datang);
router.delete("/login/:id", auth.kalian);
router.delete("/skor/:id", auth.semua);

module.exports = router;
