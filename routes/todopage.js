// const mysql = require("mysql2/promise");
// const mysqlSelect = "select json from users";
let todoObject;
let todoObject1;
const {
	selectMysql,
	deleteinsertMysql,
} = require("./select-delete-insertmysql");

const dateSort = (arr) => {
	arr.sort(function (a, b) {
		if (a.Untilwhen < b.Untilwhen) {
			return -1;
		} else {
			return 1;
		}
	});
};

class todoPage {
	static authenticate = function (req, res, username) {
		if (req.user) {
			req.flash("username", `${username} さん、こんにちは`);
			res.render("index.ejs");
			return;
		} else {
			// NGならHome画面へリダイレクト
			res.redirect("/login");
		}
	};

	static api = async function (req, res) {
		if (req.user) {
			todoObject = await selectMysql();
			res.header("Content-Type", "application/json; charset=utf-8");
			res.json(todoObject);
		} else {
			res.send("error");
		}
	};

	static makeTodo = async function (req, res) {
		todoObject = await selectMysql();
		todoObject1 = req.body;
		todoObject.push(todoObject1);
		dateSort(todoObject);
		await deleteinsertMysql(todoObject);
		// res.sendメソッドは必ず行わないといけない
		res.sendStatus(200);
	};

	static editTodo = async function (req, res, buttonNumber) {
		todoObject = await selectMysql();
		todoObject1 = req.body;
		todoObject.splice(buttonNumber, 1);
		todoObject.push(todoObject1);
		dateSort(todoObject);
		await deleteinsertMysql(todoObject);
		res.sendStatus(200);
	};

	static deleteTodo = async function (req, res, buttonNumber) {
		todoObject = await selectMysql();
		todoObject.splice(buttonNumber, 1);
		await deleteinsertMysql(todoObject);
		res.sendStatus(200);
	};
}
module.exports = todoPage;
