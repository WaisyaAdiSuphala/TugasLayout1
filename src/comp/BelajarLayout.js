/**
 * Resika
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>I Gede Made Waisya Adi Suphala </Text>
        </View>
        <View style={styles.box2}>
          <Text>SLIDER</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.b1}>
            <Text>Button</Text>
          </View>
          <View style={styles.b2}>
            <Text>Button</Text>
          </View>
          <View style={styles.b3}>
            <Text>Button</Text>
          </View>
          <View style={styles.b4}>
            <Text>Button</Text>
          </View>
        </View>

        <View style={styles.button}>
          <View style={styles.b1}>
            <Text>Button</Text>
          </View>
          <View style={styles.b2}>
            <Text>Button</Text>
          </View>
          <View style={styles.b3}>
            <Text>Button</Text>
          </View>
          <View style={styles.b4}>
            <Text>Button</Text>
          </View>
        </View>

        <View style={styles.box4}>
          <Text>Footer</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  box1: {
    flex: 1,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 2,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-around',
  },
  b1: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'space-around',
  },
  b2: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
  },
  b3: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
  },
  b4: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'space-around',
  },
  box4: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
