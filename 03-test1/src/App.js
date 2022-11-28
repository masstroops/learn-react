// import logo from './logo.svg';
import './App.less';
import './assets/css/global.less'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { main } from './router/router'
import { RenderRoutes } from './router/allocation'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <RenderRoutes routes={main} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
