// 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook
// Hook使用规则：只能在函数最外层调用hook，不要在循环、条件判断或者子函数中调用
import { useState, useEffect } from "react";

const ChatAPI = {}

// 自定义 Hook
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
    }
  })
  return isOnline
}

// 使用自定义 Hook
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)
  if (isOnline === null) return 'Loadign...'
  return isOnline ? 'Online' : 'Offline'
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)
  return (
    <li style={{color: isOnline ? 'green' : 'black'}}>
      {props.friend.name}
    </li>
  )
}
export {
  FriendListItem,
  FriendStatus,
}