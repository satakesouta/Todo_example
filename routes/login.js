const mysql = require("mysql2/promise");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const mycon = {
	host: "localhost",
	user: "root",
	password: "",
	database: "db_name",
};

// ログインusernameとpasswordが記載のテーブルはあらかじめmysqlで作成

const loginMysql = async () => {
	const con = await mysql.createConnection(mycon);
	const [rows] = await con.query("SELECT * from login;");
	con.end();
	return rows[0];
};

const gagaga = async (username, password, done) => {
	const login = await loginMysql();
	if (username !== login.username) {
		return done(null, false, { message: "ユーザーIDが間違っています。" });
	} else if (password !== login.password) {
		return done(null, false, { message: "ユーザーIDが間違っています。" });
	} else {
		return done(null, username);
	}
};

passport.use(
	new LocalStrategy((username, password, done) => {
		gagaga(username, password, done);
	})
);

passport.serializeUser((user, done) => {
	console.log("Serialize ...");
	done(null, user);
});

passport.deserializeUser((user, done) => {
	console.log("Deserialize ...");
	return done(null, user);
});

module.exports = passport;
