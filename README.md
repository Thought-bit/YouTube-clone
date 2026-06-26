# YouTube Clone

一个基于 React + Vite 构建的 YouTube 克隆项目。

## 功能特性

- 📺 视频首页展示
- 🔍 视频搜索功能
- 📱 响应式设计
- 📋 推荐视频列表
- 🎬 视频播放页面

## 技术栈

- **React 19** - 前端框架
- **Vite 8** - 构建工具
- **React Router DOM 7** - 路由管理
- **Moment.js** - 时间格式化

## 快速开始

### 前置要求

确保你的电脑已经安装：
- Node.js (版本 18+)
- npm 或 yarn

### 安装步骤

1. **克隆项目**

```bash
git clone https://github.com/Thought-bit/YouTube-clone.git
cd YouTube-clone
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm run dev
```

4. **打开浏览器**

访问 http://localhost:5173（或终端显示的其他端口）

### 可用脚本

```bash
npm run dev    # 启动开发服务器
npm run build  # 构建生产版本
npm run lint   # 代码检查
npm run preview # 预览生产构建
```

## 项目结构

```
src/
├── Components/     # 通用组件
│   ├── Feed/       # 视频列表
│   ├── Navbar/     # 导航栏
│   ├── PlayVideo/  # 视频播放
│   ├── Recommended/# 推荐视频
│   └── Sidebar/    # 侧边栏
├── Pages/          # 页面组件
│   ├── Home/       # 首页
│   └── Video/      # 视频详情页
├── assets/         # 静态资源
├── App.jsx         # 主应用组件
├── main.jsx        # 入口文件
└── index.css       # 全局样式
```

## 注意事项

项目中使用了 YouTube Data API 获取视频数据。如果 API key 失效，视频列表可能无法正常加载，但项目 UI 仍可正常展示。

## 许可证

MIT