import React from "react";
import { View,ScrollView } from "react-native";
import BookList from "../components/BooksList";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1}}>
      <BookList 
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HomeScreen;