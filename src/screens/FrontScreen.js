import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import ActivityList from "../component/ActivityList";
import NewsList from "../component/NewsList";
import ServeList from "../component/ServeLIst";
import Searchbar from "../component/Searchbar";


const FrontScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF2C5' }}>
      <Center>
        <Text style={{ fontSize: 36, fontWeight: '900', color: '#B1D9DE',marginBottom:-15}}>
          BABY
        </Text>
        <Text style={{ fontSize: 36, fontWeight: '900', color: '#B1D9DE'}}>
          ZOO
        </Text>
      </Center>
      <Searchbar/>
      <ServeList/>
      <ActivityList />
      <NewsList />
    </ScrollView>
  );
};

export default FrontScreen;





