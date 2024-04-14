import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { HStack, VStack } from "@gluestack-ui/themed";

const ActivityList = ({ data }) => {
    return (

        <View style={styles.activitySection}>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#B1D9DE', zIndex: 2 }}>活動資訊</Text>
                <View style={{ width: 125, height: 16, backgroundColor: 'white', borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </View>
            <View style={styles.actImgSection}>
                <View style={styles.imgArrange}>
                    <VStack>
                        <Image
                            source={{ uri: 'https://github.com/leeinxuan/babyzoo/blob/main/src/img/otter_activity.jpg?raw=true' }}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white', zIndex: 2, }}>水獺洗臉教學</Text>
                            <View style={{ width: 100, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -12 }}></View>
                        </View>
                    </VStack>
                    <VStack>
                        <Image
                            source={{ uri: 'https://github.com/leeinxuan/babyzoo/blob/main/src/img/sloth_activity.jpg?raw=true' }}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white', zIndex: 2 }}>樹懶寫生比賽</Text>
                            <View style={{ width: 100, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -12 }}></View>
                        </View>
                    </VStack>
                </View>
                <View style={styles.imgArrange}>
                    <VStack>
                        <Image
                            source={{ uri: 'https://github.com/leeinxuan/babyzoo/blob/main/src/img/unicorn_activity.jpg?raw=true' }}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white', zIndex: 2 }}>尋找獨角獸</Text>
                            <View style={{ width: 100, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -12 }}></View>
                        </View>
                    </VStack>
                    <VStack>
                        <Image
                            source={{ uri: 'https://github.com/leeinxuan/babyzoo/blob/main/src/img/capybara_activity.jpg?raw=true' }}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white', zIndex: 2 }}>水豚君橘子秀</Text>
                            <View style={{ width: 100, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -12 }}></View>
                        </View>
                    </VStack>
                </View>
            </View>
        </View>

    );
};

export default ActivityList;

const styles = StyleSheet.create({
    activitySection: {
        margin: 20,

    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
    imgArrange: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -15
    },
    activitImg: {
        width: 169,
        height: 188,
        borderRadius: 35,
        zIndex: 1,
    },
    textsection: {
        position: 'relative',
        zIndex: 2,
        top: -35,
        alignItems: 'flex-end',
        marginRight: 20,
        
    }


})

