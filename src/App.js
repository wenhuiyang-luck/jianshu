import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { IconFontGlobalStyle } from './statics/iconfont/iconfont.js'
import Header from './common/header'
import store from './store'

function App() {
  return (
    <div>
      <GlobalStyle />
      <IconFontGlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
