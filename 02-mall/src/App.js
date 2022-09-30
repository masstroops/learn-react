import { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import BottomNav from "./components/BottomNav";
import CartPage from "./pages/CartPage";
import IndexPage from "./pages/IndexPage";
import OrderListPage from "./pages/OrderListPage";
import UserPage from "./pages/UserPage";

function App() {
  const [activeNum, setActiveNum] = useState(0)
  return (
    <div className="App">
      {/* {activeNum === 0 && <IndexPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderListPage />}
      {activeNum === 3 && <UserPage />}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} /> */}
      <Link to='/index'></Link>
      <Link to='/cart'></Link>
      <Link to='/order'></Link>
      <Link to='/user'></Link>
      <Switch>
        <Route path='/index' component={IndexPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/order' component={OrderListPage} />
        <Route path='/user' component={UserPage} />
      </Switch>
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  );
}

export default App;
