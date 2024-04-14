import React from "react";
import { Text, FlatList, SectionList, StyleSheet, View, Image } from "react-native";
import { VStack, Center, Box } from "@gluestack-ui/themed";

const BabyPicture = () => {

    return (
        <View style={styles.imgArrange}>
                    <VStack>
                        <Image
                            source={require('../img/penguinbaby.jpeg')}
                            style={styles.activitImg} />
                    </VStack>
                    <VStack>                        
                    <Image
                            source={require('../img/penguinbaby2.jpeg')}
                            style={styles.activitImg} />
                    </VStack>
                    <VStack>
                        <Image
                            source={require('../img/penguinbaby3.jpeg')}
                            style={styles.activitImg} />
                    </VStack>
                </View>

);
};

export default BabyPicture;

const styles = StyleSheet.create({
    activitySection: {
        margin: 20,

    },
    imgArrange: {
        flexDirection: 'row',
        top:30,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginRight:6,
        marginLeft:6,
    },
    activitImg: {
        width: 120,
        height: 120,
        borderRadius: 35,
        zIndex: 1,

    },
})

