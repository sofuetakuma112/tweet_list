# Tweet List

## Build Setup

``` bash
# ホームディレクトリに移動
cd

# appブランチをリモートからcloneする
git clone -b app https://github.com/sofuetakuma112/tweet_list.git

# backendディレクトリに移動
cd tweet_list/backend

# package.jsonからdependenciesをインストール
npm install

# APIサーバー起動
npm start

## ~~~~別ターミナル起動~~~~~

# frontendディレクトリに移動
cd && cd tweet_list/frontend

# package.jsonからdependenciesをインストール
npm install

# localhost:8080で開発サーバー起動
npm run dev

# localhost:8080へアクセス
http://localhost:8080
```

## 参考記事
https://qiita.com/y4u0t2a1r0/items/a6aea444efc8e8e65293
