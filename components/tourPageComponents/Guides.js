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

export class TourGuides extends Component {
    constructor(props) {
        super();
        this.state = {
            tour: props.tour,
        };
    }

    // Create components
    createGuideElement(guide, i) {
        return (
            <View key={i} style={styles.factElement(i%2==0 ? Colors.secondColor : Colors.tintColor)}>
                {/* <NatText style={styles.fact}>{url}</NatText> */}
                <Image
                    source={{
                        uri: `${Info.websiteHost}/img/users/${guide.photo}`,
                    }}
                    style={styles.profileImage}
                ></Image>
                <NatText style={styles.text}>
                    {guide.name} - {guide.role.toUpperCase()}
                </NatText>
            </View>
        );
    }

    createGuideElements(guides) {
        const elements = [];
        for (i in guides) {
            elements.push(this.createGuideElement(guides[i], i));
        }
        return <View style={styles.factList}>{elements}</View>;
    }

    // RENDER
    render() {
        return (
            <View style={{ ...this.props.style, ...styles.container }}>
                {this.createGuideElements(this.state.tour.guides)}
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
        justifyContent: 'center',
    },
    icon: {
        color: `${Colors.white}dd`,
        marginBottom: 4,
    },
    factElement: color => {return {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
        backgroundColor: `${color}ee`,
        // width: '40%',
    };},
    text: {
        fontSize: 20,
        color: Colors.white,
    },
    profileImage: {
        width: localInfo.profileImageSize,
        height: localInfo.profileImageSize,
        borderRadius: localInfo.profileImageSize / 2,
    },
});
