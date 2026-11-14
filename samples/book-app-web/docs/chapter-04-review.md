# 第 4 章审查记录

## 应用的技能规则

本次按 `book-app-reviewer` 技能聚焦标题层级：页面使用一个 `h1`，其下的区域使用较低层级标题，书名应位于结果标题之下。改动应小而易于初学者理解，并保留现有设计与行为。

## 自定义 Agent 的职责与限制

`.github/agents/book-app-explainer.agent.md` 定义了 `book-app-explainer`，用于向初学者解释 `samples/book-app-web` 的代码和测试。它要求先读相关代码、使用简短句子并解释技术术语，回答包括功能、数据流、当前书籍数据示例、测试覆盖范围和手动检查。

该 Agent 只配置 `read` 和 `search` 工具。指令禁止它编辑文件、运行命令或使用外部服务；它可以检查测试，但不能运行测试或声称测试已通过。

## 本次改动

- `src/components/BookCard.tsx`：每本书的标题从 `h2` 改为 `h3`，使其成为结果标题的下级标题。
- `src/styles/app.css`：将标题选择器从 `.book-card h2` 改为 `.book-card h3`，保留原有样式声明。
- `src/tests/headings.test.tsx`：增加标题层级测试，检查“12 books shown”是二级标题，“The Hobbit”是三级标题。

过滤和统计逻辑未改动。

## 实际执行的测试和构建

- 改动前：`npm test -- --run` 通过，2 个测试文件共 4 项测试通过；`npm run build` 生产构建通过。
- 改动后：`npm test -- --run` 通过，3 个测试文件共 5 项测试通过；`npm run build` 生产构建通过。

## 开发服务器与浏览器检查

- 使用 `npm run dev` 启动应用。
- 在宽屏和窄屏尺寸下的浏览器检查均通过。
- 搜索 `hobbit` 正常显示匹配结果。
- 搜索 `zzzz-no-match` 显示预期的空状态，统计数据保持一致。
