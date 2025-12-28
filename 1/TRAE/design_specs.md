# 设计参数对照文档 (Design Specifications)

## 1. 颜色系统 (Color System)

| 变量名 | 色值 (Hex) | 说明 |
| :--- | :--- | :--- |
| `--bg-body` | `#f7f9fb` | 页面背景色 (Light Gray) |
| `--bg-sidebar` | `#ffffff` | 侧边栏背景色 (White) |
| `--bg-card` | `#ffffff` | 卡片/内容区域背景色 (White) |
| `--text-primary` | `#1c1c1c` | 主要文字颜色 (Black/Dark Gray) |
| `--text-secondary` | `#8e8e93` | 次要文字颜色 (Gray) |
| `--primary-color` | `#95a4fc` | 主题色/强调色 (Soft Blue) |
| `--border-color` | `rgba(0,0,0,0.1)` | 边框/分割线颜色 |

## 2. 排版系统 (Typography)

*   **字体家族 (Font Family)**: `Inter`, -apple-system, BlinkMacSystemFont, sans-serif
*   **字号 (Font Sizes)**:
    *   `12px`: Section Titles, Small Labels
    *   `14px`: Body Text, Navigation Items, Input Text
    *   `16px`: Logo Text, Medium Headings
    *   `18px`: Card Headings
    *   `24px`: Page Titles

## 3. 间距与布局 (Spacing & Layout)

| 变量名 | 数值 | 说明 |
| :--- | :--- | :--- |
| `--sidebar-width` | `212px` | 侧边栏宽度 |
| `--header-height` | `64px` | 顶部导航栏高度 |
| `--border-radius` | `16px` | 组件圆角 |
| `--spacing-xs` | `4px` | 极小间距 |
| `--spacing-sm` | `8px` | 小间距 (内部元素间距) |
| `--spacing-md` | `16px` | 中间距 (组件内边距) |
| `--spacing-lg` | `24px` | 大间距 (组件间距/容器内边距) |
| `--spacing-xl` | `32px` | 特大间距 (区块间距) |

## 4. 阴影与效果 (Shadows & Effects)

*   **侧边栏阴影 (Mobile)**: `box-shadow: 2px 0 10px rgba(0,0,0,0.1)`
*   **交互状态**:
    *   Hover: 背景色变化 `rgba(0,0,0,0.05)`
    *   Transition: `0.2s` (背景色、颜色变化)

## 5. 组件规范 (Component Specs)

### 按钮 (Buttons)
*   高度: `24px` (Icon Buttons)
*   背景: 透明 (Default) / 浅灰色 (Hover)

### 输入框 (Inputs)
*   高度: 自动 (Padding: `10px 12px`)
*   边框: `1px solid var(--border-color)`
*   圆角: `8px`
*   背景: `#ffffff`

### 侧边栏 (Sidebar)
*   宽度: `212px`
*   背景: `#ffffff`
*   右边框: `1px solid var(--border-color)`
