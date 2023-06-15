// import logo from './logo.svg';
import './App.less';
import './assets/css/global.less'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { RenderRoutes } from './router/allocation'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <RenderRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
