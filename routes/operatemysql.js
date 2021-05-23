const mysql = require("mysql2/promise");

const mycon = {
	host: "localhost",
	user: "username",
	password: "password",
	database: "db_name",
};

// テーブル及びデータベースはあらかじめmysqlで作成してください（mysql設定.md参照）
// mysqlに格納するデータ例（一つのフィールドに下記のjsonデータを保存）
// [{"What":"todoappをgithubに公開","Where":"家","Untilwhen":"2021-04-24"},{"What":"大学にいく","Where":"大学","Untilwhen":"2021-04-27"}]

const selectMysql = async (req, res) => {
	if (req.user) {
		const con = await mysql.createConnection(mycon);
		try {
			const [rows] = await con.query(
				`select * from ${req.user} order by cast(Untilwhen as date);`
			);
			res.header("Content-Type", "application/json; charset=utf-8");
			res.json(rows);
		} catch (err) {
			res.status(500).send({ error: "Error" });
		}
		con.end();
	} else {
		res.status(404).send("Not Found");
	}
};

const insertMysql = async (todoObject, req, res) => {
	if (req.user) {
		const con = await mysql.createConnection(mycon);
		try {
			await con.query(
				`INSERT INTO ${req.user} (What, Place, Untilwhen) VALUES ("${todoObject.What}", "${todoObject.Place}", "${todoObject.Untilwhen}")`
			);
		} catch (err) {
			res.status(500).send({ error: "Error" });
		}
		con.end();
	} else {
		res.status(404).send("Not Found");
	}
};

const deleteMysql = async (id, req, res) => {
	if (req.user) {
		const con = await mysql.createConnection(mycon);
		try {
			await con.query(`DELETE FROM ${req.user} where id = ${id}`);
		} catch (err) {
			res.status(500).send({ error: "Error" });
		}
		con.end();
	} else {
		res.status(404).send("Not Found");
	}
};

const updateMysql = async (todoObject, id, req, res) => {
	if (req.user) {
		const con = await mysql.createConnection(mycon);
		try {
			await con.query(
				`UPDATE ${req.user} SET What="${todoObject.What}",Place="${todoObject.Place}",Untilwhen="${todoObject.Untilwhen}" where id = ${id}`
			);
		} catch (err) {
			res.status(500).send({ error: "Error" });
		}
		con.end();
	} else {
		res.status(404).send("Not Found");
	}
};

exports.insertMysql = insertMysql;
exports.selectMysql = selectMysql;
exports.deleteMysql = deleteMysql;
exports.updateMysql = updateMysql;
