import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { HStack, VStack } from "@gluestack-ui/themed";

const Detail = ({ data }) => {
    return (

        <View style={styles.activitySection}>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', zIndex: 2 }}>King Penguin</Text>
                <View style={{ width: 170, height: 16, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </View>
            <View style={styles.textStyle2}>
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black', zIndex: 2, top: 20 }}>本館位置</Text>
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black', zIndex: 2, top: 20 }}>南極企鵝館</Text>
                <View style={{ width: 260, height: 80, backgroundColor: 'white', borderRadius: 10, zIndex: 1, top: -45 }}></View>
            </View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={{ fontWeight: 'bold',fontSize: 21,zIndex: 2}}>地理分佈</Text>
                    <View style={{ width: 90, height: 20, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -15 }}></View>
                </View>
                <View style={styles.textContainer2}>
                    <Text style={{ fontWeight: 'bold',fontSize: 21,zIndex: 2}}>形態特徵</Text>
                    <View style={{ width: 90, height: 20, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -15 }}></View>
                </View>
            </View>
            <View style={styles.imgArrange}>
                    <VStack>
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black',}}>次南極區。涵蓋南美福克蘭群島、喬治亞群島、南非南方海域及紐西蘭南方海域。</Text>
                        </View>
                    </VStack>
                    <VStack>                        
                        <View style={styles.line}>
                        <View style={{ position: 'absolute', left: -170,width: 340, height: 3, backgroundColor: '#3C3C3C', borderRadius: 10 , zIndex: 2,}}></View>
                        <View style={{ width: 3, height: 180, backgroundColor: '#3C3C3C', borderRadius: 0 , zIndex: 1,}}></View>
                        </View>
                    </VStack>
                    <VStack>
                        <View style={styles.textsection2}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black'}}>1. 嘴喙長、耳羽顏色偏橘，有一圈黑邊框，圖案類似水滴形。</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black'}}>2. 喉嚨至前胸部位為金黃色。</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black'}}>3. 在圈養環境下平均壽命約15~20年。</Text>
                        </View>
                    </VStack>
                </View>
        </View>

    );
};

export default Detail;

const styles = StyleSheet.create({
    activitySection: {
        margin: 20,
        marginTop: 25,
    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
    textStyle2: {
        alignItems: 'center',
    },
    imgArrange: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -26
    },
    textsection: {
        marginLeft:10,
        width: 150,
        height: 150,
        marginTop:20,
    },
    textsection2: {
        width: 150,
        height: 150,
        marginTop:20,
    },
    container: {
        flexDirection: 'row', // 水平排列
        
    },
    textContainer: {
        paddingHorizontal: 10, // 文字間距
        marginLeft:5,
      },
    textContainer2: {
        paddingHorizontal: 10, // 文字間距
        marginLeft:75,
      },
      line: {
        position: 'relative',
        alignItems: 'flex-end',
    }
})

