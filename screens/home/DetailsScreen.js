import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View,
} from 'react-native';
import api from '../../data/api';
import Colors from '../../constants/Colors';
import { TourPage } from '../../components/TourPage';

export default class DetailsScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.navigation.getParam('itemId', 'ALT'),
            DATA: this.load(props.navigation.getParam('itemId', 'ALT')),
        };
    }

    // Update STATE
    load(id) {
        api.getTour(id, data => {
            this.setState({ DATA: data });
        });
    }
    
    // RENDER
    render() {
        if (this.state.DATA) {
            return (
                <View style={styles.container}>
                    <TourPage
                        id={this.state.id}
                        DATA={this.state.DATA}
                        navigation={this.props.navigation}
                        error={this.state.DATA.error}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        size="large"
                        style={{ marginTop: 20 }}
                        color={Colors.richBlack}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
