import React from "react";
import Content from "./Content";
import { ThemeContext, UserContext } from "./context1";

class ContextTest3 extends React.Component {
  render() {
    const {user, theme} = this.props
    return (
      <ThemeContext.Provider value={theme?theme:'light'}>
        <UserContext.Provider value={user}>
          <Content />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default ContextTest3