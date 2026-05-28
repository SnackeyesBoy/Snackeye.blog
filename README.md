# Snackeyes.Blog

> **從設計美學到電機邏輯：跨領域的數位筆記**
> 
> 雖然目前正值碩一，但我相信邊做邊學永遠不嫌晚。從大一設計轉系至大二電機，歷經了跨領域追趕與碩班推甄的洗禮，這個網站不僅是技術的累積，更是成長的印記。

---

## 🔗 網站連結
- **個人部落格：** [Snackeyes.blog](https://snackeyesboy.github.io/Snackeyes.blog/)

## 🛠️ 技術開發 (Technical Stack)

*   **開發語言：** `HTML` / `CSS` / `JavaScript`
*   **靜態網站產生器：** [Hugo](https://gohugo.io/)
*   **自動化部署：** GitHub Actions (CI/CD)
*   **框架：**　Hugo
*   **後臺管理:** Sveltia CMS

---

## 📂 網站架構 (Project Structure)

```text
.
├── .github/workflows/    # GitHub Actions 自動化佈署腳本
├── archetypes/           # 文章模板內容
├── assets/               # 需經 Hugo 編譯的資源 (如 SCSS)
├── content/              # 網站核心內容
│   ├── other/            # 雜記與生活
│   └── works/            # 技術作品集
├── layouts/              # 網頁版面配置 (HTML Templates)
│   └── _default/
├── static/               # 靜態資源目錄
│   ├── css/              # 外部樣式表
│   ├── img/              # 影像資源
│   ├── js/               # JavaScript 腳本
│   └── music/            # 音訊檔案
├── themes/               # Hugo 佈景主題
└── public/               # 自動生成之靜態網頁 (佈署分支專用)
