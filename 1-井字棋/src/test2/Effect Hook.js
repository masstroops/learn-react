// useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
import { useState, useEffect } from "react";

const ChatAPI = {}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  // 可以使用多个 Effect 实现关注点分离
  useEffect(() => { // componentDidMount，componentDidUpdate的时候会调用
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return function cleanup() { // componentWillUnmount的时候回调用
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  })

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]); // 仅在 count 更改时更新

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, []); // 如果是空数组，表示不监听任何状态，只会初始化渲染的时候执行一次回调里的内容

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus