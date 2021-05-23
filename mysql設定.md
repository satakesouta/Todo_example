あらかじめ root ユーザーを使って MySQL へ接続<br>
ユーザーの作成<br>
mysql> create user username@localhost identified by ‘password’;

username@localhost ユーザーにグローバルレベルの権限付与<br>
mysql> grant all on _._ to username@localhost;

作成したユーザーで mysql 接続<br>
% mysql -u username -h localhost -p

データベースの作成<br>
mysql> CREATE DATABASE db_name;
