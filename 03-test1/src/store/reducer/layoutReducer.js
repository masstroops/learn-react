export default function reducer(state = '侧边导航', action) {
  switch (action.type) {
    case '顶部导航':
    case '侧边导航':
      return action.mode
    default:
      return state
  }
}