/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Search from './search-box';

export default class Mars extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search
            ref="search_box"
            /**
             * There many props that can customizable
             * Please scroll down to Props section
             */
        />
        <Text style={styles.map}>
          mapView
        </Text>
        <Text style={styles.caresel}>
          images lightbox
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    backgroundColor: '#F5FCFF',
  },
  map: {
    backgroundColor: '#888888',
    height: 365,
  },
  caresel: {
    color: '#333333',

  },
});

AppRegistry.registerComponent('Mars', () => Mars);
