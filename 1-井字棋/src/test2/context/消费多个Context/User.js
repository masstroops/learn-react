import { ThemeContext, UserContext } from "./context1"

// 一个组件可能消费多个 Context
export default function User() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
          <div>
            {theme} {user}
          </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}