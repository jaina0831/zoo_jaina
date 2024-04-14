import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Detail from "../component/Detail";
import Music from "../component/Music";
import BabyPicture from "../component/BabyPicture";



const AnimalInfoScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <BabyPicture/>
      <Detail/>
      <Music/>
    </ScrollView>
  );
};

export default AnimalInfoScreen;