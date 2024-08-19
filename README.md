# 电影评分应用

一个使用 React、Next.js、Redux Toolkit、TypeScript 和 Chakra UI 构建的电影评分应用。此项目旨在提供一个美观且功能齐全的用户界面，允许用户查看电影列表、查看电影详情以及对电影进行评分。应用还实现了弹性布局，无限滚动、防抖和节流，redux toolkit数据持久化等性能优化功能。
# 效果预览

### 列表页
![Movie List](./public/movieList.png)
### 详情页
![Movie Detail](./public/movieDetail.png)

## 功能特点
- **弹性布局**：电影列表采用网格布局，瀑布流式加载，网格宽度固定，列数根据屏幕宽度自适应，比如屏幕宽度1920的是7列, 1320的是5列
- **滚动加载**：随着页面滚动自动加载数据，todo:长列表使用react-window优化
- **服务端渲染 (SSR)**：首页前10个电影条目使用 SSR 加速初始加载
- **防抖和节流**：搜索框进行防抖处理，边输入边查询，提升用户体验，搜索时已忽略大小写及前后空格；查看详情按钮和评分按钮进行节流处理
- **Redux Toolkit**：数据状态管理，详情页点击评分，列表页和详情页自动更新
- **数据持久化**：选用redux-persist支持数据持久化，刷新页面或者二次进入时上次的评分和搜索关键字仍然存在并回显
- **图片优化**：电影图片采用webp格式，减少图片大小，提升加载性能
- **测试**：使用 Jest 和 React Testing Library 进行单元测试和组件测试
- **设计语言和数据**：设计语言借鉴豆瓣电影，数据也从豆瓣电影抓取
- **美观的 UI**：使用 Chakra UI 设计的响应式和用户友好的界面

## 项目结构

```diff
src/
├── app/
│   ├── page.tsx                        # 首页
│   ├── layout.tsx                      # 页面布局
│   └── movie/[id]/page.tsx             # 电影详情页面
├── components/
│   ├── MovieList.tsx                   # 电影列表组件
│   ├── MovieDetail.tsx                 # 电影详情组件
│   ├── MovieCard.tsx                   # 电影列表项组件
│   ├── NoDataDisplay.tsx               # 无数据的空白页
│   ├── SearchBar.tsx                   # 搜索栏
│   └── StarRating.tsx                  # 给电影评分组件
├── store/
│   ├── movieSlice.ts                   # Redux 电影状态切片
│   └── store.ts                        # Redux 存储配置
├── utils/
│   ├── fetchMovies.ts                  # 电影数据拉取
│   └── formatedRating.ts               # 电影评分计算工具
├── data/
│   └── movies.json                     # 本地模拟的电影列表和详情数据
├── types/
│   └── index.ts                        # 类型定义
└── __tests__/
    └── MovieDetail.test.tsx            # 电影详情组件测试
    ├── MovieDetail.test.tsx            # 电影详情组件测试
    └── MovieCard.test.tsx              # 电影卡片组件测试
```

## 安装和运行

1. 克隆仓库：
    ```bash
    git clone https://github.com/laughing001/movie-rating-web-app.git
    ```

2. 进入项目目录：
    ```bash
    cd movie-rating-web-app
    ```

3. 安装依赖：
    ```bash
    npm install
    ```

4. 运行开发服务器：
    ```bash
    npm run dev
    ```

5. 访问应用程序：
    打开浏览器并访问 [http://localhost:3000](http://localhost:3000)

## 构建和部署

1. 构建应用：
    ```bash
    npm run build
    ```

2. 部署到生产环境：
    ```bash
    npm run start
    ```

## 测试

1. 运行测试：

    ```bash
    npm test
    ```
2. 运行测试查看覆盖率：

    ```bash
    npm run test:coverage
    ```
## 贡献

欢迎贡献代码！请确保在提交 pull request 之前通过所有测试，并遵循代码风格。

1. Fork 仓库。
2. 创建一个新的分支 (`git checkout -b feature/your-feature`).
3. 提交你的更改 (`git commit -am 'Add new feature'`).
4. 推送到分支 (`git push origin feature/your-feature`).
5. 创建一个新的 pull request。

## 许可证

本项目使用 [MIT 许可证](LICENSE) 进行许可。

## 联系方式

如有任何问题或建议，请通过以下方式联系我：

- Email: rereber@qq.com
- GitHub: [laughing001](https://github.com/laughing001)
