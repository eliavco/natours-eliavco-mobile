import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Info from '../constants/Info';
import { NatText } from '../components/StyledText';

export class TourItem extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            days: props.days,
            price: props.price,
            error: props.error,
            even: props.even,
            navigation: props.navigation,
        };
        props.navigation.push('Details', { itemId: '5c88fa8cf4afda39709c295a' }); // TODO: Delete in prod
    }

    // Create Components
    createContent() {
        return (
            <View
                style={{
                    ...styles.item,
                    backgroundColor: this.state.even
                        ? `${Colors.secondColor}88`
                        : `${Colors.tintColor}cc`,
                }}
            >
                {/* Image on left side */}
                <Image
                    source={{
                        uri: `${Info.websiteHost}/img/tours/${this.state.image}`,
                    }}
                    style={styles.image}
                ></Image>

                {/* Title, days and price */}
                <View>
                    {/* Title */}
                    <NatText style={styles.title}>{this.state.title}</NatText>

                    {/* Days and price */}
                    <NatText style={styles.caption}>
                        {this.state.days} Days /{' ' + this.state.price}$
                    </NatText>
                </View>

                {/* Arrow */}
                <Ionicons
                    name={'ios-arrow-forward'}
                    size={36}
                    style={styles.icon}
                />
            </View>
        );
    }

    createError() {
        return (
            <View
                style={{
                    ...styles.item,
                    backgroundColor: `${Colors.secondColor}88`,
                }}
            >
                {/* Title */}
                <NatText
                    style={{
                        ...styles.title,
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    Errors Occurred, Please Try Again.
                </NatText>
            </View>
        );
    }

    // Features
    navigateToDetails(id) {
        return () =>
            this.state.navigation.push('Details', { itemId: this.state.id });
    }

    // RENDER
    render() {
        if (!this.state.error) {
            return (
                <View>
                    <TouchableOpacity onPress={this.navigateToDetails('id')}>
                        {this.createContent()}
                    </TouchableOpacity>
                </View>
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
        marginVertical: 10,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
    },
    title: {
        fontSize: 22,
        color: Colors.white,
    },
    caption: {
        color: Colors.tabBar,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 20,
        resizeMode: 'cover',
        borderRadius: 3,
    },
    icon: {
        color: Colors.white,
        position: 'absolute',
        right: 20,
    },
});
