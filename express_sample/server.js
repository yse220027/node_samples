//expressモジュール読み込み
const express = require('express')
//dotenvモジュール読み込み
const dotenv = require('dotenv')

//dotenv設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

//サーバー作成
const app = express()

//ミドルウェア設定
app.use(express.static(__dirname + '/public'));

//GEtリクエスト処理
app.get('/', (req, res) => {
    //リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    //レスポンス処理
    res.send('Hello!')
})

app.get('/profile', (req, res) => {
    res.send('プロフィール!')
})

//サーバー停止　起動中のターミナルでCTRL+C
//サーバー待機(Listen)
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})