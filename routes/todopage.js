let todoObject1;
const {
	selectMysql,
	insertMysql,
	deleteMysql,
	updateMysql,
} = require("./operatemysql");

class todoPage {
	static authenticate = function (req, res) {
		if (req.user) {
			req.flash("username", `${req.user} さん、こんにちは`);
			res.render("index.ejs");
			return;
		} else {
			// NGならHome画面へリダイレクト
			res.redirect("/login");
		}
	};

	static api = async function (req, res) {
		if (req.user) {
			await selectMysql(req, res);
		} else {
			res.status(404).send("Not Found");
		}
	};

	static makeTodo = async function (req, res) {
		todoObject1 = req.body;
		if (!todoObject1.What || todoObject1.What === "") {
			res.status(400).send({ error: "Whatが指定されていません" });
		} else if (!req.body.Untilwhen || req.body.Untilwhen === "") {
			res.status(400).send({ error: "Until whenが指定されていません" });
		} else if (!req.body.Place || req.body.Place === "") {
			res.status(400).send({ error: "Whereが指定されていません" });
		} else {
			await insertMysql(todoObject1, req, res);
			// res.sendメソッドは必ず行わないといけない
		}
	};

	static editTodo = async function (req, res, id) {
		todoObject1 = req.body;
		if (!req.body.What || req.body.What === "") {
			res.status(400).send({ error: "Whatが指定されていません" });
		} else if (!req.body.Untilwhen || req.body.Untilwhen === "") {
			res.status(400).send({ error: "Until whenが指定されていません" });
		} else if (!req.body.Place || req.body.Place === "") {
			res.status(400).send({ error: "Whereが指定されていません" });
		} else {
			await updateMysql(todoObject1, id, req, res);
		}
	};

	static deleteTodo = async function (req, res, id) {
		await deleteMysql(id, req, res);
	};
}
module.exports = todoPage;
