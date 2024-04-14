import React from 'react';
import { useState } from 'react';
import { View } from "react-native";
import { Box, Image, Text, Pressable } from '@gluestack-ui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import AnimalInfoScreen from '../screens/AnimalInfoScreen';
import PlanScreen from '../screens/PlanScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingtScreen from '../screens/SettingScreen';
import FrontScreen from '../screens/FrontScreen';
import MapScreen from '../screens/MapScreen';
import TicketScreen from '../screens/TicketScreen';
import MybabyScreen from '../screens/MybabyScreen';
import AboutusScreen from '../screens/AboutusScreen';
import AnimalListScreen from '../screens/AnimalListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
       <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#D56A6A', height: 190 ,marginTop:-67}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 50 }}>
            <Image
              height={55}
              width={55}
              borderRadius={40}
              marginTop={20}
              source={require("../img/APP.jpg")}
              alt='AccountImage'
            />
            <Text fontWeight='500' fontSize={24} marginLeft={16} marginTop={25} color='white'>
              Baby Zoo
            </Text>
          </View>
          <Text fontWeight='500' fontSize={16} marginLeft={20} marginTop={25} color='white'>
            babyzoo1123@gmail.com
          </Text>
        </View>
        <View style={{ backgroundColor: '#B1D9DE', flex: 2 }}>
          <DrawerItemList {...props} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerStyle: { width: 300 },
        drawerStyle: { backgroundColor: '#B1D9DE' },
        drawerActiveBackgroundColor: '#B1D9DE',
        drawerInactiveTintColor: '#ffffff',
        drawerActiveTintColor: '#D56A6A',
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20,
        },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          title: "首頁",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{
          //headerShown: false,
          title: "我的帳號",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="TicketStack"
        component={TicketScreen}
        options={{
          //headerShown: false,
          title: "我的門票",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="MybabyStack"
        component={MybabyScreen}
        options={{
          //headerShown: false,
          title: "我的寶寶",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutusStack"
        component={AboutusScreen}
        options={{
          //headerShown: false,
          title: "關於我們",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingtScreen}
        options={{
          //headerShown: false,
          title: "設定",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#FFF2C5',

        tabBarStyle: {
          height: 70,
          backgroundColor: "#D56A6A",
        },

        //headerShown:false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "地圖",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AnimalInfo"
        component={AnimalInfoStack}
        options={{
          title: "動物介紹",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          title: "行程",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={PlanScreen}
        options={{
          title: "購票",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FrontScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#FFF2C5"
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              color="#D56A6A"
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),

        }}
      />

    </Stack.Navigator>
    
  );
}
const AnimalInfoStack = ({ navigation }) => {
  return (
      <Stack.Navigator>
          <Stack.Screen
              name="AnimalInfo"
              component={AnimalListScreen}
              options={{
                title: null,
                headerShadowVisible: false,
                  headerLeft: () => (
                      <MaterialCommunityIcons
                          name={'menu'}
                          size={20}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginRight: 20 }}
                      />
                  ),
              }}
          />
          <Stack.Screen
              name="AnimalInfo2"
              component={AnimalInfoScreen}
              options={{
                title: null,
                headerShadowVisible: false,
                  headerLeft: () => (
                      <MaterialCommunityIcons
                          name={'menu'}
                          size={20}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginRight: 20 }}
                      />
                  ),
              }}
          />
      </Stack.Navigator>
  );
}

export default Navigation;



