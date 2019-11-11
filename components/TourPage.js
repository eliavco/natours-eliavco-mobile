import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Colors from '../constants/Colors';
import { NatText } from './StyledText';
import { TourDetails } from './TourDetails';

export class TourPage extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.id,
            DATA: props.DATA,
            error: props.error,
            navigation: props.navigation,
        };
    }

    // Create Components
    createContent() {
        return (
            <View>
                <TourDetails tour={this.state.DATA} navigation={this.state.navigation} id={this.state.id} />
            </View>
        );
    }

    createError() {
        return (
            <View
                style={{
                    ...styles.item,
                    backgroundColor: `${Colors.secondColor}88`,
                    borderRadius: 3,
                    marginVertical: 10,
                    marginHorizontal: 16,
                }}
            >
                {/* Title */}
                <NatText
                    style={{
                        ...styles.title,
                        textAlign: 'center',
                        width: '100%',
                        color: Colors.white,
                    }}
                >
                    Errors Occurred, Please Try Again.
                </NatText>
            </View>
        );
    }

    // RENDER
    render() {
        if (!this.state.error) {
            return (
                <ScrollView>{this.createContent()}</ScrollView>
            );
        } else {
            return <View>{this.createError()}</View>;
        }
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
        fontSize: 22,
    },
});
