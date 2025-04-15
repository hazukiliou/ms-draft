#!/usr/bin/env sh

cd "$(dirname "$0")/.."

# 發生錯誤時執行終止指令
set -e

# 打包編譯
pnpm build

# 移動到打包資料夾下
cd out

# 📛 防止 GitHub Pages 吃掉CSS
echo "" > .nojekyll

git init
git checkout -b main
git add -A
git commit -m 'deploy: update static site'

# 部署
git push -f git@github.com:hazukiliou/ms-draft.git main:gh-pages

cd -

echo "🎉 Done!"