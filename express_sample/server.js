//expressモジュール読み込み
const express = require('express')
//dotenvモジュール読み込み
const dotenv = require('dotenv')
//routerモジュール読み込み
const routes = require('./routes')

//dotenv設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

//サーバー作成
const app = express()

//ミドルウェア設定
//publicフォルダを静的コンテンツフォルダに設定
app.use(express.static(__dirname + '/public'));

//URLエンコード
app.use(express.urlencoded({ extended: true }))

//EJSをテンプレートエンジンとして設定
app.set("view engine", "ejs")

//ルーティング有効
app.use(routes)

//サーバー停止　起動中のターミナルでCTRL+C
//サーバー待機(Listen)
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})