import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { BrowserRouter, Route } from 'react-router-dom'
import { IconFontGlobalStyle } from './statics/iconfont/iconfont.js'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

function App() {
  return (
    <div>
      <GlobalStyle />
      <IconFontGlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
