# 项目目录结构

```
.
├── .gitignore                # Git忽略文件配置
├── index.html                # 项目主页面
├── package-lock.json         # 项目依赖锁定文件
├── package.json              # 项目配置和依赖管理
├── script.js                 # 主JavaScript脚本
├── server.js                 # Express服务器文件
├── transform.js              # 图片处理转换脚本
├── assets/                   # 静态资源目录
│   ├── photo.webp            # 示例图片
│   ├── cwebp/                # cwebp转换工具相关文件
│   └── sharp/                # sharp处理后的图片
│       ├── sharp-1.webp      # 质量1%的webp图片
│       ├── sharp-2.webp      # 质量2%的webp图片
│       ├── sharp-5.webp      # 质量5%的webp图片
│       ├── sharp-50.webp     # 质量50%的webp图片
│       ├── sharp-90.webp     # 质量90%的webp图片
│       ├── sharp-94.webp     # 质量94%的webp图片
│       └── sharp-100.webp    # 质量100%的webp图片
└── routes/                   # 路由配置目录
    └── index.js              # 主路由文件
```
