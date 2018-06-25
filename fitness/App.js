import React, {Component} from 'react';
import { View, Slider, StyleSheet, Text } from 'react-native';
import AddEntry from './components/AddEntry'
import History from './components/History'
import { getMetricMetaInfo } from './utils/helpers'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

 class App extends Component {

  render() {
    return (
      <Provider store = {createStore(reducer)}>
        <View style = {styles.container} >
          <View style = {{height: 20}}/>
            <History/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App