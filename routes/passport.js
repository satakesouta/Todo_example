const mysql = require("mysql2/promise");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const mycon = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b473df4ef3f49b",
	password: "24ae6295",
	database: "heroku_904094818a7c710",
};

// データベースルはあらかじめmysqlで作成（mysql設定.md参照）

const loginMysql = async (username, password, done) => {
	const con = await mysql.createConnection(mycon);
	try {
		const [rows] = await con.query(
			`SELECT * from login where username = ? and password = ?`,
			[username, password]
		);
		if (!rows[0]) {
			return done(null, false);
		} else {
			return done(null, username);
		}
	} catch (err) {
		done(null, false);
	}
	con.end();
};

passport.use(
	new LocalStrategy((username, password, done) => {
		loginMysql(username, password, done);
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
