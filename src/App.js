import React from 'react';
import Header from './Header';
import Content from './Content'
import themeReducer from './reducers/themeReducer';
import { createStore } from './createStore';
import { Provider } from './react-redux';

const themeStore = createStore(themeReducer);

class App extends React.Component {

  render() {
    return (
      <Provider store={themeStore}>
        <Header />
        <Content />
      </Provider>
    )
  }
}

export default App;
