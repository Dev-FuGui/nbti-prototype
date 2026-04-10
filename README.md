# NBTI 静态原型 v1

最简可测原型，支持：
- 首页
- 24 题答题流程
- 基于加权表计算结果
- 结果页第一屏
- 默认分享文案复制

## 本地预览

在当前目录运行：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://127.0.0.1:4173
```

## 文件说明

- `index.html`：页面入口
- `styles.css`：样式
- `app.js`：题目、人格数据、加权逻辑、页面交互
- `selftest.js`：基础脚本自测

## 生产部署建议

推荐采用 **GitHub 仓库 + 服务器 git clone / git pull + nginx 静态目录** 的方式：

- 仓库：`https://github.com/Dev-FuGui/nbti-prototype`
- 建议服务器路径：`/var/www/nbti-prototype/current`
- 建议测试端口：`8091`

仓库内已附：

- `deploy/deploy.sh`：服务器拉取更新脚本
- `deploy/nginx.nbti-prototype.conf`：nginx 静态站配置模板

典型部署流程：

```bash
sudo mkdir -p /var/www/nbti-prototype
cd /var/www/nbti-prototype
sudo git clone https://github.com/Dev-FuGui/nbti-prototype.git current
cd current
sudo bash deploy/deploy.sh
sudo cp deploy/nginx.nbti-prototype.conf /etc/nginx/sites-available/nbti-prototype.conf
sudo ln -s /etc/nginx/sites-available/nbti-prototype.conf /etc/nginx/sites-enabled/nbti-prototype.conf
sudo nginx -t && sudo systemctl reload nginx
```

默认访问：

```text
http://SERVER_IP:8091
```

## 当前未完成

- 结果页第二屏解释内容
- 分享文案风格切换（装逼版 / 自嘲版）
- URL 参数持久化 / 结果分享链接
- 更细的题目校验与权重调优
- 移动端截图优化细节
