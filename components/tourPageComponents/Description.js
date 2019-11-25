import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Info from '../../constants/Info';
import { NatText } from './../StyledText';
import { Ionicons } from '@expo/vector-icons';

export class TourDescription extends Component {
    constructor(props) {
        super();
        this.state = {
            tour: props.tour
        };
    }

    // RENDER
    render() {
        return (
            <View style={{ ...this.props.style, ...styles.container }}>
                <Ionicons name={`ios-information-circle-outline`} size={34} style={styles.icon} />
                <NatText style={styles.text}>
                    {this.state.tour.description}
                </NatText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        textAlign: 'justify',
    },
    icon: {
        color: `${Colors.richBlack}dd`,
        textAlign: 'center',
    },
});
