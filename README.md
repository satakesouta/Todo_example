# Todo app

- javascript, expressjs, mysqlを用いたウェブTodoアプリです
## [機能説明]
- まずはユーザー登録画面でアカウントを作成し、ログイン画面でログインします
- ログインするとDBに保存されているTodoデータが表示されます
- Todo listは日付順に自動で並べ、表示します
- データの作成、追加、削除はそれぞれ'Add task', 'Edit', 'Delete'ボタンを押下で実行できます
- スマホ、タブレット、パソコンのブラウザで使用できます（IE非推奨）
## [コード説明]
- バックエンドにはexpressjs、フロントエンドにはjavascriptを使用しました
- レスポンシブ対応です
- bootstrapを使ってデザイン構築しました
- ユーザー登録、ログイン機能付きです
- passportjsとredisを使用しセッション管理します
- restapi仕様です
## [使用方法]
- あらかじめhomebrewを使ってredisとmysqlをインストールしてください
- mysqlでデータベースを作成する必要があります、詳しくはmysql設定.mdを参照してください
- ローカルホストで使用してください
- 作業ディレクトリに移動後npm startで起動し、ブラウザでhttp://localhost:5000/login へアクセスしてください
## [webアプリの紹介]
- herokuにTodoアプリをデプロイしました
- ユーザー登録すれば誰でも使えるのでぜひ
- https://todoapp-satake.herokuapp.com/login
