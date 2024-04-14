import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Audio } from 'expo-av';
import { IconButton } from 'react-native-paper';

const Music = () => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../Media/penguin.mp3'));
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setIsPlaying(true);
    }

    async function pauseSound() {
        if (sound) {
            console.log('Pausing Sound');
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.activitySection}>
            <View style={styles.musicbox}>
                <Image
                    source={require('../img/penguin_song.png')}
                    style={styles.activitImg} />
                <View style={styles.textsection}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', }}>我的冰箱裡面有企鵝</Text>
                    <View style={styles.container}>
                        {isPlaying ? (
                            <IconButton icon="pause" onPress={pauseSound} color="#D56A6A" />
                        ) : (
                            <IconButton icon="play" onPress={playSound} color="#B1D9DE" />
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.newstextsection}>
                <Text style={styles.newstext}>我要認養</Text>
            </View>
        </View>
    );
};

export default Music;

const styles = StyleSheet.create({
    activitySection: {
        margin: 20,
        alignItems: 'center',
    },
    newstextsection: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF2C5',
        marginTop: 20,
        width: 140,
        height: 55,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
    },
    newstext: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        width: 70,
        height: 60,
        marginLeft: 40,
        marginTop: 15,
        borderRadius: 20,
    },
    textsection: {
        marginTop: 20,

    },
    activitImg: {
        width: 130,
        height: 130,
        borderRadius: 35,
        marginRight: 40,
    },
    musicbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    }
});
