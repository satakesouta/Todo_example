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
			res.status(404).send("Not Found");
		}
	};

	static makeTodo = async function (req, res) {
		todoObject = await selectMysql();
		todoObject1 = req.body;
		if (!req.body.What || req.body.What === "") {
			res.status(400).send({ error: "Whatが指定されていません" });
		} else if (!req.body.Untilwhen || req.body.Untilwhen === "") {
			res.status(400).send({ error: "Until whenが指定されていません" });
		} else if (!req.body.Where || req.body.Where === "") {
			res.status(400).send({ error: "Whereが指定されていません" });
		} else {
			todoObject.push(todoObject1);
			dateSort(todoObject);
			await deleteinsertMysql(todoObject);
			// res.sendメソッドは必ず行わないといけない
			res.status(201).send({ status: "OK" });
		}
	};

	static editTodo = async function (req, res, buttonNumber) {
		todoObject = await selectMysql();
		todoObject1 = req.body;
		if (!req.body.What || req.body.What === "") {
			res.status(400).send({ error: "Whatが指定されていません" });
		} else if (!req.body.Untilwhen || req.body.Untilwhen === "") {
			res.status(400).send({ error: "Until whenが指定されていません" });
		} else if (!req.body.Where || req.body.Where === "") {
			res.status(400).send({ error: "Whereが指定されていません" });
		} else {
			todoObject.splice(buttonNumber, 1);
			todoObject.push(todoObject1);
			dateSort(todoObject);
			await deleteinsertMysql(todoObject);
			res.status(202).send({ status: "OK" });
		}
	};

	static deleteTodo = async function (req, res, buttonNumber) {
		todoObject = await selectMysql();
		todoObject.splice(buttonNumber, 1);
		await deleteinsertMysql(todoObject);
		res.status(203).send({ status: "OK" });
	};
}
module.exports = todoPage;
