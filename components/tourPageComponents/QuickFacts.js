import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Info from '../../constants/Info';
import { NatText } from './../StyledText';
import { Ionicons } from '@expo/vector-icons';

export class TourQuickFacts extends Component {
    constructor(props) {
        super();
        this.colorIndex = 0;
        this.colors = [
            `${Colors.pallete[0]}88`,
            `${Colors.pallete[1]}88`,
            `${Colors.pallete[2]}88`,
            `${Colors.pallete[3]}88`,
            `${Colors.pallete[4]}`,
        ];
        this.state = {
            tour: props.tour
        };
    }

    // Create components
    createFactElement(icon, text) {
        const index = this.colorIndex % this.colors.length;
        const color = this.colors[index];
        this.colorIndex++;
        return (
            <TouchableOpacity>
                <View style={styles.factElement(color)}>
                    <Ionicons
                        name={`ios-${icon}`}
                        size={34}
                        style={styles.icon}
                    />
                    <NatText style={styles.fact}>
                        {text}
                    </NatText>
                </View>
            </TouchableOpacity>
        );
    }

    // RENDER
    render() {
        return (
            <View style={{ ...this.props.style, ...styles.container }}>
                <ScrollView style={styles.factList} horizontal={true}>
                    {/* DURATION ELEMENT */}
                    {this.createFactElement(
                        'time',
                        this.state.tour.duration > 1
                            ? `${this.state.tour.duration} Days`
                            : `1 Day`
                    )}

                    {/* LOCATION ELEMENT */}
                    {this.createFactElement(
                        'airplane',
                        this.state.tour.startLocation.description
                    )}

                    {/* NEXT DATE ELEMENT */}
                    {(() => {
                        this.nextDate = new Date(this.state.tour.startDates[0]);
                    })()}
                    {this.createFactElement(
                        'calendar',
                        `${this.nextDate.getMonth() +
                            1}/${this.nextDate.getDate()}/${this.nextDate.getFullYear()}`
                    )}

                    {/* DIFFICULTY ELEMENT */}
                    {this.createFactElement(
                        'pulse',
                        this.state.tour.difficulty.toUpperCase()
                    )}

                    {/* PARTICIPANTS ELEMENT */}
                    {this.createFactElement(
                        'people',
                        `${this.state.tour.maxGroupSize} People`
                    )}

                    {/* RATING ELEMENT */}
                    {this.createFactElement(
                        'star',
                        `${this.state.tour.ratingsAverage}/5.0 (${this.state.tour.ratingsQuantity})`
                    )}
                </ScrollView>
            </View>
        );
    }
}

const localInfo = {
    factElementSize: 95,
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
    factElement: color => {
        return {
            width: localInfo.factElementSize,
            height: localInfo.factElementSize,
            borderRadius: localInfo.factElementSize / 2,
            backgroundColor: color,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
            marginVertical: 10,
        };
    },
    fact: {
        color: `${Colors.white}ee`,
    },
});
