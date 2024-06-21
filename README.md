# 走線動畫

<p align="center">
    <img
        src="https://media.giphy.com/media/ZebherRm7KtfNqf1J2/giphy.gif"
        alt="專案封面圖"
    >
</p>

> Vue 3 / Vite + TypeScript 矩形與心形的走線動畫。

- [線上觀看連結](https://stoneshih225.github.io/homework-border-animation/)

## 目錄

- [功能](#功能)
- [安裝](#安裝)
- [資料夾說明](#資料夾說明)
- [專案技術](#專案技術)
- [開發心得](#開發心得)
- [聯絡我](#聯絡我)

## 功能

- [x] 4 種格子數量切換模式 (1x1、3x3、5x5、10x10)
- [x] 2 種顯示模式切換 (All、Random)
  - Random 模式：依照選擇的格子數量隨機執行動畫 (ex: 3x3 隨機選 3 個, 5x5 隨機選 5 個...)
- [x] 2 種形狀切換 (Rectangle、Heart)

## 安裝

以下將會引導如何安裝此專案到電腦上：

Node.js 版本建議為 `v20.10.0` 以上。

### 取得專案

```bash
git clone git@github.com:stoneshih225/homework-border-animation.git
```

### 移動到專案內

```bash
cd homework-border-animation
```

### 安裝套件

```bash
pnpm install
```

### 運行專案

```bash
pnpm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:5173/
```

## 資料夾說明

- src - 所有內容入口
  - components - 組件放置處
  - styles - 共用樣式放置處
  - utils - 共用方法放置處
  - App.vue - 畫面顯示
  - controllerConfig.ts - 控制列的變數配置

## 專案技術

- Node.js v20.10.0
- Vue v3.4.21
- Vite v5.2.0
- TypeScript v5.2.2

## 開發心得

首先，感謝給予我這個機會進行測驗，開發過程中滿開心的，剛好也做了之前一直想試看看的動態效果，其中有幾個問題想要討論看看：

- /src/components/Main/Main.vue:42 覺得這部分寫的不是很好，不知道有沒有更好的方式
- 矩形和心形的動態分別用了不同的方式實踐，前者使用元素，後者使用 svg 實踐，一直在想是不是統一會比較好
- 動態 ease 的部分，有點好奇是如何調的如此順暢 (快到慢)
- 很好奇你們會如何實踐這兩個動態需求

最後，期待有機會能夠進一步的了解貴公司文化以及團隊文化，期望有機會能夠加入團隊一起開發，謝謝。

## 聯絡我

透過以下方式與我聯絡：

- [LinkedIn](https://www.linkedin.com/in/alvin-shih-099194274/)
