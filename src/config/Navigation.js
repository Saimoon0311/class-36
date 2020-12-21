import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/contact'
import CameraApp from './src/screens/camera'
import ImagePickerExample from '../screens/Gallery'
import Map from '../screens/Map'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title:'MY HOME SCREEN',headerStyle:{
          backgroundColor:'orange'
        },headerTitle:props=><Image style={{height:70,width:70,resizeMode:"contain"  }} source ={{uri:"https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"}}/>
        }} name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Camera" component={CameraApp} />
        <Stack.Screen name="ImagePickerExample" component={ImagePickerExample} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation 
