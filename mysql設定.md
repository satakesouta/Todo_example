//あらかじめ root ユーザーを使って MySQL  へ接続
//ユーザーの作成

> create user username@localhost identified by ‘password’;

//username@localhost ユーザーにグローバルレベルの権限付与

> grant all on _._ to username@localhost;

//作成したユーザーで mysql 接続
%mysql -u username -h localhost -p

//データベースの作成

> CREATE DATABASE db_name;

//json データ用テーブルの作成

> CREATE TABLE db_name.tbl_name (json longtext);

//login データ用テーブル作成

> CREATE TABLE db_name.tbl_name2(id varchar(30), password varchar(30));

//id とパスワードを挿入

> insert into db_name.tbl_name2 values('xxx', 'yyy');
