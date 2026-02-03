import {useAudioPlayer, useAudioPlayerStatus} from 'expo-audio';
import React, {FC, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Sound: FC = () => {
    const player = useAudioPlayer(require('./assets/sounds/mixkit-fantasy-bells-582.wav'), {downloadFirst: true});
    const status = useAudioPlayerStatus(player);

    const onPressHandler = useCallback(() => {
        player.volume = 0.1;

        player.seekTo(0);
        player.play();
    }, [player]);

    if (!status.isLoaded) {
        return (
            <View style={styles.root}>
                <Text style={styles.notLoaded}>NOT LOADED!</Text>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity onPress={onPressHandler}>
                <Text style={styles.button}>Sound</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333'
    },

    notLoaded: {
        color: 'red',
        fontSize: 48,
    },

    button: {
        backgroundColor: '#EEE',
        padding: 15,
        margin: 20,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 7,
    },
});

export default Sound;
