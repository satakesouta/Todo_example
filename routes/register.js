const mysql = require("mysql2/promise");

const mycon = {
	host: "localhost",
	user: "username",
	password: "password",
	database: "db_name",
};

const loginMysql = async (username) => {
	const con = await mysql.createConnection(mycon);
	const [rows] = await con.query(
		`SELECT * from tbl_name2 where username="${username}"`
	);
	con.end();
	return rows[0];
};

const signUpMysql = async (req, res, username, password) => {
	const con = await mysql.createConnection(mycon);
	try {
		await con.query(
			`insert into tbl_name2 values ('${username}', '${password}');`
		);
		await con.query(
			`CREATE TABLE ${username} (id int not null primary key auto_increment,What text not null,Place text not null,Untilwhen text not null);`
		);
		req.flash("error", "ユーザーネーム登録完了！ログインしよう！");
		res.redirect("./login");
	} catch (err) {
		req.flash("error", "そのユーザーネームは使えません");
		await con.query(`DELETE FROM tbl_name2 where username="${username}"`);
		res.redirect("./register");
	}
	con.end();
};

const register = async (req, res) => {
	const todoObject1 = {
		username: req.body.username,
		password: req.body.password,
	};
	const user = await loginMysql(todoObject1.username);
	if (todoObject1.username.length < 9) {
		req.flash("error", "ユーザーネームの文字数が足りません");
		res.redirect("./register");
	} else if (todoObject1.password.length < 9) {
		req.flash("error", "パスワードの文字数が足りません");
		res.redirect("./register");
	} else if (user) {
		req.flash("error", "そのユーザーネームはすでに使われています");
		res.redirect("./register");
	} else {
		await signUpMysql(req, res, todoObject1.username, todoObject1.password);
	}
};

module.exports = register;
