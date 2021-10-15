const mysql = require("mysql2/promise");

const mycon = {
	host: "localhost",
	user: "username",
	password: "password",
	database: "db_name",
};

// データベースはあらかじめmysqlで作成してください（mysql設定.md参照）

const selectMysql = async (req, res) => {
	if (req.user) {
		const con = await mysql.createConnection(mycon);
		try {
			const [rows] = await con.query(
				`select * from ?? order by cast(Untilwhen as date);`,
				[req.user]
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
			await con.query(`INSERT INTO ?? set ?`, [
				req.user,
				{
					What: todoObject.What,
					Place: todoObject.Place,
					Untilwhen: todoObject.Untilwhen,
				},
			]);
			res.status(201).send({ status: "OK" });
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
			await con.query(`DELETE FROM ?? where id = ?`, [req.user, id]);
			res.status(203).send({ status: "OK" });
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
			await con.query(`UPDATE ?? SET ? where id = ?`, [
				req.user,
				{
					What: todoObject.What,
					Place: todoObject.Place,
					Untilwhen: todoObject.Untilwhen,
				},
				id,
			]);
			res.status(202).send({ status: "OK" });
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
