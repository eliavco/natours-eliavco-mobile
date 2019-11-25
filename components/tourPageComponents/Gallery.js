import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Info from '../../constants/Info';
import { NatText } from './../StyledText';
import { Ionicons } from '@expo/vector-icons';

export class TourGallery extends Component {
    constructor(props) {
        super();
        this.state = {
            tour: props.tour
        };
    }

    // Create components
    createImageElement(url, i) {
        return (
            <View key={i}>
                <TouchableOpacity>
                    <View style={styles.factElement}>
                        {/* <NatText style={styles.fact}>{url}</NatText> */}
                        <Image
                            source={{
                                uri: `${Info.websiteHost}/img/tours/${url}`,
                            }}
                            style={styles.image}
                        ></Image>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    createImageElements(images) {
        const elements = [];
        for (i in images) {
            elements.push(this.createImageElement(images[i], i));
        }
        return (<ScrollView style={styles.factList} horizontal={true}>{elements}</ScrollView>);
    }

    // RENDER
    render() {
        return (
            <View style={{ ...this.props.style, ...styles.container }}>
                {this.createImageElements(this.state.tour.images)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${Colors.richBlack}06`,
    },
    item: {
        padding: 10,
    },
    factList: {
        paddingHorizontal: 10,
    },
    icon: {
        color: `${Colors.white}dd`,
        marginBottom: 4,
    },
    factElement: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 10,
        // backgroundColor: `${Colors.richBlack}`,
    },
    fact: {
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 150,
    },
});
