import * as WebBrowser from 'expo-web-browser';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BrowseScreen from './home/BrowseScreen';
import DetailsScreen from './home/DetailsScreen';

export default createStackNavigator(
    {
        Browse: {
			screen: BrowseScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'All Tours',
				headerTitleStyle: {
					fontFamily: 'lato-regular',
					fontWeight: '200',
				},
			}),
        },
        Details: {
			screen: DetailsScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Details',
				headerTitleStyle: {
					fontFamily: 'lato-regular',
					fontWeight: '200',
				},
			}),
        },
    },
    {
		initialRouteName: 'Browse',
    }
);
