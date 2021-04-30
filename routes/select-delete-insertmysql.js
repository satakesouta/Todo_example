const mysql = require("mysql2/promise");
const mysqlSelect = "select json from users";

const mycon = {
	host: "localhost",
	user: "root",
	password: "",
	database: "db_name",
};

// jsonカラム（データ型はlongtext）を保持するテーブルはあらかじめmysqlで作成してください
// mysqlに格納するデータ例（jsonデータ、一つのフィールドに下記のjsonデータを保存）
// [{"What":"todoappをgithubに公開","Where":"家","Untilwhen":"2021-04-24"},{"What":"大学にいく","Where":"大学","Untilwhen":"2021-04-27"}]

const selectMysql = async () => {
	const con = await mysql.createConnection(mycon);
	const [rows] = await con.query(mysqlSelect);
	if (rows[0].json == null) {
		const rr = [];
		con.end();
		return rr;
	} else {
		const rr = JSON.parse(rows[0].json);
		con.end();
		return rr;
	}
};

const deleteinsertMysql = async (todoObject) => {
	const con = await mysql.createConnection(mycon);
	await con.query("DELETE FROM users");
	await con.query("INSERT INTO users (json) VALUES (?)", [
		JSON.stringify(todoObject),
	]);
};

exports.deleteinsertMysql = deleteinsertMysql;
exports.selectMysql = selectMysql;
