import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';

import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    View,
    RefreshControl,
} from 'react-native';

import { TourQuickFacts } from '../components/tourPageComponents/QuickFacts';

import Colors from '../constants/Colors';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // Update STATE

    // RENDER
    render() {
        return (
            <View style={styles.container}>
                <TourQuickFacts days={5} style={styles.element} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    list: {
        marginTop: 10,
    },
});
