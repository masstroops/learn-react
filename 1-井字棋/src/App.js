import './App.css';
import Game from './test1/Game';
import Clock from './test2/state&生命周期';
import ContextTest from './test2/context/ContextTest';
import ContextTest2 from './test2/context/在嵌套组件内更新Context/ContextTest';
import ContextTest3 from './test2/context/消费多个Context/ContextTest3';
import WrongTest from './test2/错误边界';
import {CommentListWithSubscription, BlogPostWithSubscription} from './test2/高阶组件'
import SomePlugin from './test2/与第三方库协同';
import ModalBox from './test2/Portals';
import MouseTracker from './test2/RenderProps';
import ReduxPage from './test3/redux';
import ReactReduxPage from './test3/ReactReduxPage';
import RouterPage from './test3/RouterPage';
import AntdTest from './test3/antd基础';
import HocPage from './test3/高阶组件hoc';
import MyRCFrom from './test3/高阶组件版表单组件设计';

function App() {
  return (
    <div className="App">
      <Game />
      <Clock />
      <ContextTest />
      <ContextTest2 />
      <ContextTest3 />
      <WrongTest />
      <CommentListWithSubscription abc={666} />
      <BlogPostWithSubscription />
      <SomePlugin />
      <ModalBox />
      <MouseTracker />
      <ReduxPage />
      <ReactReduxPage />
      <RouterPage />
      <AntdTest />
      <HocPage />
      <MyRCFrom />
    </div>
  );
}

export default App;
