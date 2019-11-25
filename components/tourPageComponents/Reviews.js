import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Info from '../../constants/Info';
import { NatText } from './../StyledText';
import { Ionicons } from '@expo/vector-icons';

export class TourReviews extends Component {
    constructor(props) {
        super();
        this.state = {
            tour: props.tour,
        };
    }

    // Create components
    createReviewElement(review, i) {
        console.log(review);
        return (
            <View
                key={i}
                style={styles.factElement(
                    i % 2 == 0 ? Colors.secondColor : Colors.tintColor
                )}
            >
                {/* <NatText style={styles.fact}>{url}</NatText> */}
                <Image
                    source={{
                        uri: `${Info.websiteHost}/img/users/${
                            review.user ? review.user.photo : 'default.jpg'
                        }`,
                    }}
                    style={styles.profileImage}
                ></Image>
                <NatText style={styles.text}>
                    {review.user ? review.user.name : 'Anonymous User'}
                </NatText>
                {this.createStars(review.rating, i)}
                <NatText style={styles.smallText}>{review.content}</NatText>
            </View>
        );
    }

    createReviewElements(reviews) {
        const elements = [];
        for (i in reviews) {
            elements.push(this.createReviewElement(reviews[i], i));
        }
        return (
            <ScrollView style={styles.factList} horizontal={true}>
                {elements}
            </ScrollView>
        );
    }

    createStars(num, i) {
        const stars = [];
        for (let i = 0; i < num; i++) {
            stars.push(<Ionicons name={`ios-star`} key={i} size={34} style={styles.icon} />);
        }
        for (let i = 5; i > num; i--) {
            stars.push(<Ionicons name={`ios-star-outline`} key={i} size={34} style={styles.icon} />);
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                {stars}
            </View>
        );
    }

    // RENDER
    render() {
        return (
            <View style={{ ...this.props.style, ...styles.container }}>
                {this.createReviewElements(this.state.tour.reviews)}
            </View>
        );
    }
}

const localInfo = {
    profileImageSize: 50,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${Colors.richBlack}06`,
    },
    item: {
        padding: 10,
    },
    factList: {
        paddingHorizontal: 10,
        // justifyContent: 'center',
    },
    icon: {
        color: `${Colors.white}dd`,
        marginBottom: 4,
        marginRight: 4,
    },
    factElement: color => {
        return {
            // justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            backgroundColor: `${color}ee`,
            width: 220,
        };
    },
    text: {
        fontSize: 20,
        color: Colors.white,
    },
    smallText: {
        fontSize: 16,
        color: Colors.white,
    },
    profileImage: {
        width: localInfo.profileImageSize,
        height: localInfo.profileImageSize,
        borderRadius: localInfo.profileImageSize / 2,
    },
});
