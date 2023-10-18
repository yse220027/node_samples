//fs モジュール読み込み
const fs = require("fs")

// data/items.jsonのパス設定
exports.filePath = "./data/items.json"

//全てのデータを取得
exports.get = () => {
    //外部ファイルを読み込み
    var json = fs.readFileSync(this.filePath)
    //JSONデータをパース
    var values = JSON.parse(json);
    return values;
}

//IDを指定してデータを取得するメソッド
exports.find = (id) => {
    var values = this.get();
    //データを繰り返してidが一致したら返す
    return values.find((value) => value.id == id);
}
