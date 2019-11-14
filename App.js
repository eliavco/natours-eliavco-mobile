import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useKeepAwake } from 'expo-keep-awake';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        if (__DEV__) {
            useKeepAwake();
        }
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        if (__DEV__) {
            useKeepAwake();
        }
        playWelcomeSound();
        return (
            <View style={styles.container}>
                {/* <StatusBar hidden ></StatusBar> */}
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <AppNavigator />
            </View>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            //
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
            'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
            'lato-italic': require('./assets/fonts/Lato-Italic.ttf'),
            'lato-light': require('./assets/fonts/Lato-Light.ttf'),
            'lato-light-italic': require('./assets/fonts/Lato-LightItalic.ttf'),
        }),
        soundObject.loadAsync(require('./assets/sounds/hello.mp3')),
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

async function playWelcomeSound() {
    if (!__DEV__) {
        try {
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
