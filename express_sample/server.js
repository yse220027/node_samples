//expressモジュール読み込み
const express = require('express')
//dotenvモジュール読み込み
const dotenv = require('dotenv')

//dotenv設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

//サーバー作成
const app = express()

//GEtリクエスト処理
app.get('/', (req, res) => {
    //リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    //レスポンス処理
    res.send('Hello!')
})

