// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()

//GEtリクエスト処理
router.get('/', (req, res) => {
    //リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    //レスポンス処理
    res.send('Hello!')
})

//get
router.get('/profile', (req, res) => {
    res.send('プロフィール!')
})

// POSTリクエスト
router.post('/auth', (req, res) => {
    // POSTデータ取得
    var loginName = req.body.login_name
    var password = req.body.password

    console.log(loginName, password)

    var message = "ログイン失敗"
    // .env で設定した値で、ログインチェック
    // TODO：データベースに接続してユーザ取得
    // TODO：パスワードはハッシュ値でチェック
    if (loginName == process.env.LOGIN_NAME&& password == process.env.PASSWORD) {
        message = "ログイン成功"
        //TODO ログインが成功したらユーザの状態を保存
        //TODO ログイン後のページの転送
    } else {
        //TODO ログイン画面に戻す
    }
    res.send(message)
})

// モジュール化
module.exports = router