# HowToRun - 跑步教程网站

一个现代化的跑步教程网站，专为跑步初学者设计，提供科学的训练计划、运动员故事和跑步智慧。

## 🌟 功能特色

### 📚 三大核心模块
1. **🏃 训练计划 (Training Plans)**
   - First 5K (首个5公里)
   - First 10K (首个10公里)
   - Half Marathon (半程马拉松)
   - Full Marathon (全程马拉松)

2. **🏆 运动员故事 (Athlete Stories)**
   - Roger Bannister (第一个4分钟英里)
   - Eliud Kipchoge (破2小时马拉松)
   - Paula Radcliffe (女子马拉松世界纪录)
   - Haile Gebrselassie (长跑皇帝)
   - Lasse Viren (芬兰飞人)
   - Wang Junxia (中国长跑传奇)
   - Usain Bolt (最快的人)
   - David Rudisha (800米大师)

3. **💡 跑者箴言 (Runner's Wisdom)**
   - For Beginners (新手入门)
   - Setting Goals (目标设定)
   - Motivation (激励)
   - Running Technique (跑步技巧)
   - Nutrition Tips (营养建议)

### 🌍 多语言支持
- 支持8种语言：英语、中文、法语、日语、德语、西班牙语、意大利语、俄语
- 自动检测浏览器语言
- 右上角语言选择器

### 🔍 搜索功能
- 实时搜索训练计划、运动员故事和跑步建议
- 智能结果展示
- 点击结果直接跳转到相关内容

### 📊 进度跟踪
- 记录完成的跑步次数和总距离
- 当前训练周进度
- 成就系统 (First Steps, Distance Runner, Century Club等)
- 本地存储，数据持久化

### 📱 响应式设计
- 完美适配桌面、平板和手机
- 移动端优化的侧边栏布局
- 触摸友好的交互设计

## 🚀 快速开始

### 本地开发
```bash
# 克隆项目
git clone <repository-url>
cd howtorun

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:5173 查看效果

### 构建生产版本
```bash
npm run build
```

## 🌐 部署到Cloudflare Pages

### 方法一：通过GitHub自动部署

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **在Cloudflare Pages中连接GitHub仓库**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 进入 Pages 页面
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 选择你的GitHub仓库

3. **配置构建设置**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (默认)

4. **部署**
   - 点击 "Save and Deploy"
   - 等待构建完成

### 方法二：手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传dist文件夹**
   - 在Cloudflare Pages中创建新项目
   - 选择 "Direct Upload"
   - 上传 `dist` 文件夹内容

## 💰 Google AdSense 集成

### 准备工作
1. 确保网站有足够的内容和流量
2. 网站必须运行至少6个月
3. 遵守AdSense政策

### 集成步骤
1. **申请AdSense账户**
   - 访问 [Google AdSense](https://www.google.com/adsense)
   - 填写申请表格
   - 等待审核通过

2. **添加广告代码**
   - 在 `index.html` 的 `<head>` 部分添加AdSense代码
   - 在内容区域添加广告单元

3. **优化广告位置**
   - 侧边栏广告
   - 内容间广告
   - 页脚广告

## 🛠 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **样式**: CSS3 (Flexbox/Grid)
- **状态管理**: React Hooks
- **本地存储**: localStorage
- **部署**: Cloudflare Pages

## 📁 项目结构

```
howtorun/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── App.css          # 主样式文件
│   ├── main.jsx         # 应用入口
│   └── index.css        # 全局样式
├── package.json         # 项目配置
├── vite.config.js       # Vite配置
└── README.md           # 项目说明
```

## 🎯 功能亮点

### 科学训练计划
- 基于跑步科学的训练方法
- 循序渐进，适合初学者
- 详细的周计划说明

### 激励系统
- 传奇运动员故事
- 成就解锁系统
- 进度可视化

### 用户体验
- 直观的侧边栏导航
- 实时搜索功能
- 多语言支持
- 响应式设计

## 🔮 未来计划

- [ ] 添加更多训练计划 (越野跑、超马等)
- [ ] 集成跑步数据同步 (Strava, Garmin等)
- [ ] 社区功能 (用户分享、评论)
- [ ] 个性化训练建议
- [ ] 移动端应用

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request！

---

**开始你的跑步之旅吧！** 🏃‍♂️

