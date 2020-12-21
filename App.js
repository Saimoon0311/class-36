import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/config/Navigation'
import { StyleSheet, Text, View , Image ,ImageBackground,ActivityIndicator, TextInput,Button,TouchableOpacity,ScrollView , FlatList} from 'react-native';
export default function App() {
  return (
    <Navigation />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
card:{
  backgroundColor:"white",
  width:"80%",
  height:200,
  justifyContent:"center",
  alignItems:"center",
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
}
});
