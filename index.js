import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    count:0,
  }

  _incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }

  _decrementCount = () => {
    this.setState({count: this.state.count - 1});
  }

  // componentDidMount() {
  //   setInterval(this._incrementCount, 1000);
  // }

  render() {
    return (
      <View style={styles.panel}>
      <Text>{`Count: ${this.state.count}`}</Text>
        <VrButton onClick={this._incrementCount} style={styles.greeting}>
          <Text style={styles.greeting}>
              Incrementar
          </Text>
        </VrButton>
        <VrButton onClick={this._decrementCount} style={styles.greeting}>
          <Text style={styles.greeting}>
              Decrementar
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 0, 0, 1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
