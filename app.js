// おそらく設定ファイルのようなもの

const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("./routes/passport.js");
const session = require("express-session");
const redis = require("redis");
const connectRedis = require("connect-redis");
const flash = require("express-flash");
const todoPage = require("./routes/todopage");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// express.staticでpublicディレクトリをルートパスに指定
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
	host: "localhost",
	port: 6379,
});
redisClient.on("connect", function (err) {
	console.log("Connected to redis successfully");
});

// var sessionStore = new MySQLStore(options);
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		store: new RedisStore({ client: redisClient }),
		cookie: {
			maxAge: 60 * 1000 * 10,
		},
	})
);
app.use(passport.initialize());
app.use(passport.session());

//
//
// ログイン機能（login.ejs）
app.get("/login", function (req, res, next) {
	res.render("login.ejs");
});

app.post(
	"/login",
	(req, res, next) => {
		req.flash("error", "ユーザーIDが間違っています。");
		next();
	},
	passport.authenticate("local", {
		// successRedirect: "./",
		failureRedirect: "/login",
		session: true,
		// failureFlash: "ユーザーIDが間違っています。",
	}),
	(req, res) => {
		// 認証成功した場合のコールバック
		req.session.save(() => {
			res.redirect("./");
		});
	}
);

app.post("/logout", (req, res, next) => {
	req.logout();
	// req.session.destroy();
	res.redirect("/");
});
// ログイン機能終わり

//
//
// Todoページ（index.ejs）初め
app.get("/", function (req, res) {
	todoPage.authenticate(req, res);
});

app.get("/api", (req, res) => {
	todoPage.api(req, res);
});

app.post("/make", async (req, res) => {
	todoPage.makeTodo(req, res);
});

app.post("/edit", async (req, res) => {
	todoPage.editTodo(req, res);
});

app.post("/delete", async (req, res) => {
	todoPage.deleteTodo(req, res);
});
// Todoページ終わり

module.exports = app;
