const mysql = require("mysql2/promise");
const mysqlSelect = "select json from tbl_name";

const mycon = {
	host: "localhost",
	user: "username",
	password: "password",
	database: "db_name",
};

// テーブル及びデータベースはあらかじめmysqlで作成してください（mysql設定.md参照）
// mysqlに格納するデータ例（一つのフィールドに下記のjsonデータを保存）
// [{"What":"todoappをgithubに公開","Where":"家","Untilwhen":"2021-04-24"},{"What":"大学にいく","Where":"大学","Untilwhen":"2021-04-27"}]

const selectMysql = async () => {
	const con = await mysql.createConnection(mycon);
	const [rows] = await con.query(mysqlSelect);
	if (rows[0] == null) {
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
	await con.query("DELETE FROM tbl_name");
	await con.query("INSERT INTO tbl_name (json) VALUES (?)", [
		JSON.stringify(todoObject),
	]);
};

exports.deleteinsertMysql = deleteinsertMysql;
exports.selectMysql = selectMysql;
