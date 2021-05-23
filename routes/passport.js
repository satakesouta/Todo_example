const mysql = require("mysql2/promise");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const mycon = {
	host: "localhost",
	user: "username",
	password: "password",
	database: "db_name",
};

// データベース及びテーブルはあらかじめmysqlで作成（mysql設定.md参照）

const loginMysql = async (username, password) => {
	const con = await mysql.createConnection(mycon);
	const [rows] = await con.query(
		`SELECT * from tbl_name2 where username="${username}" and password="${password}";`
	);
	con.end();
	console.log(rows[0]);
	return rows[0];
};

const authentication = async (username, password, done) => {
	const login = await loginMysql(username, password);
	if (!login) {
		return done(null, false);
	} else {
		return done(null, username);
	}
};

passport.use(
	new LocalStrategy((username, password, done) => {
		authentication(username, password, done);
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
