
# howtorun

一个极简、科学、面向跑步小白的跑步入门网站。

## 项目简介
- 极简风格：只有一个搜索框和一个按钮，内容科学、客观、易懂。
- 技术栈：React + Vite
- 部署推荐：Cloudflare Pages（免费、简单）

## 本地运行
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 打开浏览器访问 http://localhost:5173

## 部署到 Cloudflare Pages
1. 注册并登录 [Cloudflare](https://pages.cloudflare.com/)
2. 新建项目，选择你的 GitHub 仓库（howtorun）
3. 构建设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
4. 部署完成后即可通过分配的域名访问

## 集成 Google AdSense（可选）
- 访问 [Google AdSense](https://www.google.com/adsense/start/)，注册并获取广告代码
- 将广告代码嵌入到 `src/App.jsx` 或 `index.html` 合适位置

---
如有问题，欢迎提 issue！

