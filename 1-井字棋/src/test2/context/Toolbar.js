import ThemeButton from "./ThemeButton";

// 中间的组件再也不必指明往下传递 theme 了。
export function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}