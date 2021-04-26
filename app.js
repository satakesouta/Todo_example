// おそらく設定ファイルのようなもの

const createError = require("http-errors");
const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("./routes/login.js");
const session = require("express-session");
const redis = require("redis");
const connectRedis = require("connect-redis");
const mysql = require("mysql2/promise");
const flash = require("express-flash");
const mysqlSelect = "select json from users";
const url = require("url");
let todoObject;
let todoObject1;
let buttonNumber;

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
// データベース情報
const mycon = {
	host: "localhost",
	user: "root",
	password: "",
	database: "db_name",
};

// jsonカラム（データ型はlongtext）を保持するテーブルはあらかじめmysqlで作成してください
// mysqlに格納するデータ例（jsonデータ、一つのフィールドに下記のjsonデータを保存）
// [{"What":"todoappをgithubに公開","Where":"家","Untilwhen":"2021-04-24"},{"What":"大学にいく","Where":"大学","Untilwhen":"2021-04-27"}]

const selectMysql = async () => {
	const con = await mysql.createConnection(mycon);
	const [rows] = await con.query(mysqlSelect);
	if (rows[0].json == null) {
		const rr = [];
		con.end();
		return rr;
	} else {
		const rr = JSON.parse(rows[0].json);
		con.end();
		return rr;
	}
};

const deleteinsertMysql = async (todoObject) => {
	const con = await mysql.createConnection(mycon);
	await con.query("DELETE FROM XXXXX");
	await con.query("INSERT INTO XXXXX (XXXXX) VALUES (?)", [
		JSON.stringify(todoObject),
	]);
};

// const insertMysql = async (todoObject) => {
// 	const con = await mysql.createConnection(mycon);
// 	await con.query("INSERT INTO users (json) VALUES (?)", [
// 		JSON.stringify(todoObject),
// 	]);
// };

app.get("/", function (req, res, next) {
	if (req.user) {
		res.render("index.ejs");
		return;
	} else {
		// NGならHome画面へリダイレクト
		res.redirect("/login");
	}
});

// api作成
app.get("/api", async (req, res, next) => {
	todoObject = await selectMysql();
	// await select;
	const param = JSON.stringify(todoObject);
	res.header("Content-Type", "application/json; charset=utf-8");
	res.send(param);
});

// Todo新規作成
app.post("/make", async (req, res, next) => {
	todoObject = await selectMysql();
	todoObject1 = {
		What: req.body.What,
		Where: req.body.Where,
		Untilwhen: req.body.Untilwhen,
	};
	todoObject.push(todoObject1);
	dateSort(todoObject);
	await deleteinsertMysql(todoObject);
	res.redirect("/");
});

// Todo編集
app.post("/edit", async (req, res, next) => {
	todoObject = await selectMysql();
	todoObject1 = {
		What: req.body.What,
		Where: req.body.Where,
		Untilwhen: req.body.Untilwhen,
	};
	buttonNumber = req.body.edit;
	todoObject.splice(buttonNumber, 1);
	todoObject.push(todoObject1);
	dateSort(todoObject);
	await deleteinsertMysql(todoObject);
	res.redirect("/");
});

// Todo削除
app.post("/delete", async (req, res, next) => {
	todoObject = await selectMysql();
	buttonNumber = req.body.delete;
	todoObject.splice(buttonNumber, 1);
	await deleteinsertMysql(todoObject);
	res.redirect("/");
});

const dateSort = (arr) => {
	arr.sort(function (a, b) {
		if (a.Untilwhen < b.Untilwhen) {
			return -1;
		} else {
			return 1;
		}
	});
};
// Todoページ終わり

//
//
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.use(function (req, res, next) {
	res.status(404).send("Sorry cant find that!");
});

// const passport = require("passport");

var debug = require("debug")("myapp:server");
var http = require("http");

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || 5000;
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// unhandledRejection のイベントをキャプチャ
// UnhandledPromiseRejectionWarningはエラーの発生場所までは伝えないので下のコードが役に立つ
process.on("unhandledRejection", (reason, p) => {
	console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	debug("Listening on " + bind);
}

module.exports = app;
