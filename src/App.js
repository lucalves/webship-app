import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'

import Header from './components/Header'
import PromotionsList from './components/PromotionsList'
import store from './store/'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <Header />
          <PromotionsList />
        </SafeAreaView>
      </Provider>
    )
  };
};

export default App;