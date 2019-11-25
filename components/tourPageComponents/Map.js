import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Info from '../../constants/Info';
import { NatText } from './../StyledText';
import { Ionicons } from '@expo/vector-icons';

export class TourMap extends Component {
           constructor(props) {
               super();
               this.state = {
                   tour: props.tour,
               };
               this.mapRef = null;
           }

           componentDidMount() {
               this.mapRef.fitToSuppliedMarkers(
                   [
                       this.state.tour.startLocation,
                       ...this.state.tour.locations,
                   ].map((marker, i) => {
                       const latlng = {
                           longitude: marker.coordinates[0],
                           latitude: marker.coordinates[1],
                       };
                       return latlng;
                   }),
                   false // not animated //TODO: fix
               );
           }

           // RENDER
           render() {
               return (
                   <View style={{ ...this.props.style, ...styles.container }}>
                       <MapView
                           style={styles.mapStyle}
                           initialRegion={{
                               longitude: this.state.tour.startLocation
                                   .coordinates[0],
                               latitude: this.state.tour.startLocation
                                   .coordinates[1],
                               latitudeDelta: 0.0922,
                               longitudeDelta: 0.0421,
                           }}
                           ref={ref => {
                               this.mapRef = ref;
                           }}
                       >
                           {[
                               this.state.tour.startLocation,
                               ...this.state.tour.locations,
                           ].map((marker, i) => {
                               const latlng = {
                                   longitude: marker.coordinates[0],
                                   latitude: marker.coordinates[1],
                               };
                               return (
                                   <Marker
                                       coordinate={latlng}
                                       title={marker.description}
                                       key={i}
                                   />
                               );
                           })}
                       </MapView>
                   </View>
               );
           }
       }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: 300,
    },
});
