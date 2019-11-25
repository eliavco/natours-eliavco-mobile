import React from 'react';
import { Platform } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
// import HomeScreen from '../screens/ExperimentScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Colors from '../constants/Colors';
import { NatText } from '../components/StyledText';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const noHeaderConfig = Platform.select({
    web: { headerMode: 'screen' },
    default: {
        headerMode: 'none',
    },
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    noHeaderConfig
);

HomeStack.navigationOptions = {
    tabBarLabel: ({ focused }) => (
        <NatText
            style={{
                textAlign: 'center',
                color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
            }}
        >
            Browse
        </NatText>
    ),
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-search${focused ? '' : '-outline'}`
                    : 'md-search'
            }
        />
    ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: ({ focused }) => (
        <NatText
            style={{
                textAlign: 'center',
                color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
            }}
        >
            Links
        </NatText>
    ),
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        />
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: ({ focused }) => (
        <NatText
            style={{
                textAlign: 'center',
                color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
            }}
        >
            Account
        </NatText>
    ),
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
