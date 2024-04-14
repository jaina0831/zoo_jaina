import React from "react";
import { Text, FlatList, SectionList, StyleSheet, View, Image } from "react-native";
import { VStack, Center, Box } from "@gluestack-ui/themed";

const ServeList = () => {

    return (
        <Center style={{flexDirection:'row',justifyContent:'space-between',margin:30,marginBottom:10}}>
            <VStack style={{alignItems:'center'}}>
                <Box style={styles.serveicon}>
                    <Image
                        source={require('../img/pets.png')}

                    />
                </Box>
                <Text style={{fontSize:16,fontWeight:700,color:'#D56A6A'}}>認養</Text>
            </VStack>
            <VStack style={{alignItems:'center'}}>
                <Box style={styles.serveicon}>
                    <Image
                        source={require('../img/attach_money.png')}
                    />
                </Box>
                <Text style={{fontSize:16,fontWeight:700,color:'#D56A6A'}}>捐款</Text>
            </VStack>
            <VStack style={{alignItems:'center'}}>
                <Box style={styles.serveicon}>
                    <Image
                        source={require('../img/support_agent.png')}
                    />
                </Box>
                <Text style={{fontSize:16,fontWeight:700,color:'#D56A6A'}}>服務</Text>
            </VStack>

        </Center>
    );
};

const styles = StyleSheet.create({
    serveicon: {
        backgroundColor: '#D56A6A',
        width: 86,
        height: 86,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:6
    }
})

export default ServeList;