import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, View, RefreshControl, } from 'react-native';
import api from '../../data/api';
import Colors from '../../constants/Colors';
import { TourPage } from '../../components/TourPage';

export default class DetailsScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.navigation.getParam('itemId', 'ALT'),
            DATA: this.load(props.navigation.getParam('itemId', 'ALT')),
            refreshing: false,
        };
    }

    // Update STATE
    onRefreshControl() {
        this.setState({ DATA: {}, refreshing: true, }, () => {
            this.setState({ DATA: this.load(this.state.id), refreshing: false, });
        });
    }

    load(id) {
        api.getTour(id, data => {
            this.setState({ DATA: data });
            this.setState({ refreshing: false });
        });
    }

    // RENDER
    render() {
        if (!(this.state.DATA == {}) && this.state.DATA) {
            return (
                <ScrollView
                    style={styles.container}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefreshControl.bind(this)}
                            title="fetching..."
                        />
                    }
                >
                    <TourPage
                        id={this.state.id}
                        DATA={this.state.DATA}
                        navigation={this.props.navigation}
                        error={this.state.DATA.error}
                    />
                </ScrollView>
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
