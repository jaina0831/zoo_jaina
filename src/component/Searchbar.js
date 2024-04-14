import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import { Input, InputField, InputIcon, InputSlot, SearchIcon, Center } from '@gluestack-ui/themed';

const Searchbar = () => {

    return (
        <Center  mt={10}>
            <Input  bgColor="#B1D9DE" height={45} width={335} borderRadius={16} pr={15} pl={8}>
                <InputField placeholder="Search..." placeholderTextColor="white"/>
                <InputSlot pl="$3" >
                    <InputIcon as={SearchIcon} color="white"/>
                </InputSlot>
            </Input>
        </Center>
    );
};

const styles = StyleSheet.create({
    section: {
        marginLeft: 20,
    }
})

export default Searchbar;