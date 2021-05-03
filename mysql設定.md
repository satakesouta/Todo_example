あらかじめ root ユーザーを使って MySQLへ接続<br>
ユーザーの作成<br>
mysql> create user username@localhost identified by ‘password’;

username@localhost ユーザーにグローバルレベルの権限付与<br>
mysql> grant all on _._ to username@localhost;

作成したユーザーで mysql 接続<br>
% mysql -u username -h localhost -p

データベースの作成<br>
mysql> CREATE DATABASE db_name;

json データ用テーブルの作成<br>
mysql> CREATE TABLE db_name.tbl_name (json longtext);

login データ用テーブル作成<br>
mysql> CREATE TABLE db_name.tbl_name2(id varchar(30), password varchar(30));

id とパスワードを挿入<br>
mysql> insert into db_name.tbl_name2 values('xxx', 'yyy');
