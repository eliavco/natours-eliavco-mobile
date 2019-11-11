import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Info from '../constants/Info';
import { NatText } from './StyledText';

export class TourDetails extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.id,
            tour: props.tour,
            navigation: props.navigation,
        };
    }

    // Create Components
    createHero() {
        return (
            <ImageBackground
                source={{
                    uri: `${Info.websiteHost}/img/tours/${this.state.tour.imageCover}`,
                }}
                style={styles.heroImage}
            >
                <View style={styles.hero}>
                    <LinearGradient
                        colors={[
                            `${Colors.secondColor}ee`,
                            `${Colors.tintColor}bb`,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <NatText style={styles.title}>
                            {this.state.tour.name}
                        </NatText>
                    </LinearGradient>
                </View>
            </ImageBackground>
        );
    }

    // RENDER
    render() {
        return (
            <ScrollView>
                <View>{this.createHero()}</View>
                <View style={styles.item}>
                    {/* QUICK FACTS ELEMENT */}
                    <NatText>QUICK FACTS</NatText>

                    {/* DESCRIPTION ELEMENT */}
                    <NatText>DESCRIPTION</NatText>

                    {/* GALLERY ELEMENT */}
                    <NatText>GALLERY</NatText>

                    {/* GUIDES ELEMENT */}
                    <NatText>GUIDES</NatText>

                    {/* MAP ELEMENT */}
                    <NatText>MAP</NatText>

                    {/* REVIEWS ELEMENT */}
                    <NatText>REVIEWS</NatText>

                    {/* CTA ELEMENT */}
                    <NatText>CTA</NatText>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        padding: 10,
    },
    title: {
        fontSize: 32,
        paddingHorizontal: 10,
        color: Colors.white,
    },
    hero: {
        width: '100%',
        height: '100%',
        backgroundColor: `${Colors.richBlack}33`,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 25,
    },
    heroImage: {
        height: 35 * (Layout.window.height / 100),
        width: '100%',
    },
});
