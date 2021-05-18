const mysql = require("mysql2/promise");
const mysqlSelect = "select * from tbl_name order by cast(Untilwhen as date);";

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
	return rows;
};

const insertMysql = async (todoObject) => {
	const con = await mysql.createConnection(mycon);
	// await con.query("DELETE FROM tbl_name");
	await con.query(
		`INSERT INTO tbl_name (What, Place, Untilwhen) VALUES ("${todoObject.What}", "${todoObject.Place}", "${todoObject.Untilwhen}")`
	);
};

const deleteMysql = async (id) => {
	const con = await mysql.createConnection(mycon);
	// await con.query("DELETE FROM tbl_name");
	await con.query(`DELETE FROM tbl_name where id = ${id}`);
};

const updateMysql = async (todoObject, id) => {
	const con = await mysql.createConnection(mycon);
	// await con.query("DELETE FROM tbl_name");
	await con.query(
		`UPDATE tbl_name SET What="${todoObject.What}",Place="${todoObject.Place}",Untilwhen="${todoObject.Untilwhen}" where id = ${id}`
		// `UPDATE tbl_name6 SET Place="${todoObject.Place}" where id = ${id}`,
		// `UPDATE tbl_name6 SET Untilwhen="${todoObject.Untilwhen}" where id = ${id}`
	);
};

exports.insertMysql = insertMysql;
exports.selectMysql = selectMysql;
exports.deleteMysql = deleteMysql;
exports.updateMysql = updateMysql;
