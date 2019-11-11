import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';

import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    View,
    RefreshControl,
} from 'react-native';

import api from '../../data/api';
import { TourItem } from '../../components/TourItem';

import Colors from '../../constants/Colors';

export default class BrowseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: this.load(),
            refreshing: false,
        };
    }

    // Update STATE
    onRefreshControl() {
        this.setState({ DATA: [], refreshing: true });
        this.load();
    }

    load() {
        api.getAllTours(data => {
            this.setState({ DATA: data, });
            this.setState({ refreshing: false, });
        });
    }

    // RENDER
    render() {
        if (this.state.DATA) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.DATA}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefreshControl.bind(this)}
                                title="fetching..."
                            />
                        }
                        style={styles.list}
                        renderItem={({ item, index }) => (
                            <TourItem
                                id={item.id}
                                title={item.name}
                                error={item.error}
                                display={item.display}
                                even={index % 2 === 0}
                                image={item.imageCover}
                                days={item.duration}
                                price={item.price}
                                navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" style={{ marginTop: 20, }} color={Colors.richBlack} />
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
    list: {
        marginTop: 10,
    },
});
