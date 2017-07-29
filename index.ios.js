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
  View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import Search from './search-box';
import MapView from 'react-native-maps';
import PriceMarker from './PriceMarker';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT + 50;
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


        <ScrollView
            horizontal={true}
            style={styles.scrollView}
            >
            <Image style={styles.card} source={{ uri: "https://i.imgur.com/sNam9iJ.jpg" }} />
            <Image style={styles.card} source={{ uri: "https://i.imgur.com/UDrH0wm.jpg" }} />
            <Image style={styles.card} source={{ uri: "https://i.imgur.com/Ka8kNST.jpg" }} />
        </ScrollView>
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
    scrollView: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        paddingVertical: 30,
    },
    card: {
        padding: 10,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
});

AppRegistry.registerComponent('Mars', () => Mars);
