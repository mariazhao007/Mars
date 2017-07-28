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
import MapView from 'react-native-maps';
import PriceMarker from './PriceMarker';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


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
        <MapView style={styles.map}
                 initialRegion={{
                     latitude: 37.78825,
                     longitude: -122.4324,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                 }}
        >
             <MapView.Marker key="1"
                coordinate={{latitude: 37.78825, longitude: -122.4324}} >
                <PriceMarker amount={"苹果社区北区(10套)"} />
             </MapView.Marker>
             <MapView.Marker key="2"
                    coordinate={{latitude: 37.765719, longitude: -122.454193}} >
                    <PriceMarker amount={"苹果社区北区(10套)"} />
             </MapView.Marker>
             <MapView.Marker key="3"
                    coordinate={{latitude: 37.754587, longitude: -122.394519}} >
                    <PriceMarker amount={"苹果社区北区(10套)"} />
             </MapView.Marker>
        </MapView>
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
  },
  map: {
    height: 365,
  },
  caresel: {
    color: '#333333',

  },
});

AppRegistry.registerComponent('Mars', () => Mars);
