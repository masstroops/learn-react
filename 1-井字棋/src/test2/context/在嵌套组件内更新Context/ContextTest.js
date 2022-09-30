import React from "react";
import { ThemeContext, themes } from "./context";
import Content from "./Content";

class ContextTest2 extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => {
        return {
          theme: state.theme === themes.dark ? themes.light : themes.dark
        }
      })
    }

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    // 整个 state 都被传递进 provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    )
  }
}

export default ContextTest2