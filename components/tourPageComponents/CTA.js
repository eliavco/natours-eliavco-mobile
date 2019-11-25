import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Info from '../../constants/Info';
import { NatText } from './../StyledText';
import { Ionicons } from '@expo/vector-icons';

export class TourCTA extends Component {
    constructor(props) {
        super();
        this.state = {
            tour: props.tour,
            navigation: props.navigation,
        };
    }

    action() {
        WebBrowser.openBrowserAsync('https://natours-eliav.herokuapp.com/login');
    }

    // RENDER
    render() {
        return (
            <View style={{ ...this.props.style, ...styles.container }}>
                <TouchableOpacity style={styles.button} onPress={this.action}>
                    <Ionicons name={`ios-basket`} size={34} style={styles.icon} />
                    <NatText style={styles.text}>
                        Are you Ready for your next big adventure?
                    </NatText>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    button: {
        backgroundColor: `${Colors.tintColor}dd`,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        color: Colors.white,
    },
    icon: {
        color: Colors.white,
        textAlign: 'center',
    },
});
