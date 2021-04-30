// const mysql = require("mysql2/promise");
// const mysqlSelect = "select json from users";
let todoObject;
let todoObject1;
let buttonNumber;
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
	static authenticate = function (req, res) {
		if (req.user) {
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
		todoObject1 = {
			What: req.body.What,
			Where: req.body.Where,
			Untilwhen: req.body.Untilwhen,
		};
		todoObject.push(todoObject1);
		dateSort(todoObject);
		await deleteinsertMysql(todoObject);
		res.redirect("/");
	};

	static editTodo = async function (req, res) {
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
	};

	static deleteTodo = async function (req, res) {
		todoObject = await selectMysql();
		buttonNumber = req.body.delete;
		todoObject.splice(buttonNumber, 1);
		await deleteinsertMysql(todoObject);
		res.redirect("/");
	};
}
module.exports = todoPage;
