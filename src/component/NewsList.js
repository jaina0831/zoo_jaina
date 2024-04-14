import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { HStack, VStack, Box } from "@gluestack-ui/themed";

const NewsList = () => {
    return (
        <View style={styles.activitySection}>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#B1D9DE', zIndex: 2 }}>最新消息</Text>
                <View style={{ width: 125, height: 16, backgroundColor: 'white', borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </View>
            <View style={styles.newstextsection}>
                <Text style={styles.newstext}>【公告】BABY ZOO 4/9暫停營業</Text>
            </View>
            <View style={styles.newstextsection}>
                <Text style={styles.newstext}>【停展】企鵝餵食秀因食安問題暫停演出</Text>
            </View>
            <View style={styles.newstextsection}>
                <Text style={styles.newstext}>【人事】BABY ZOO 徵求工讀生數名</Text>
            </View>



        </View>

    );
};

export default NewsList;

const styles = StyleSheet.create({
    activitySection: {
        margin: 20,

    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
    newstextsection:{
        paddingLeft:25,
        justifyContent:'center',
        backgroundColor:'#B1D9DE',
        marginBottom:20,
        width:355,
        height:55,
        borderRadius:20,
        shadowOffset:{width:0,height:4},
        shadowColor:'black',
        shadowOpacity:0.4,
        shadowRadius:4,
        elevation:4
    },
    newstext:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        
    }


})

