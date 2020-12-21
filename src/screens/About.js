import React from 'react';
import { StyleSheet, Text, View , Image ,ImageBackground,ActivityIndicator, TextInput,Button,TouchableOpacity,ScrollView , FlatList} from 'react-native';


function About ({route}){
    const {name }=route.params;
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>About</Text>
    <Text style={{fontSize:32}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
flex:1,
backgroundColor:"white",
// alignItem:"center",
justifyContent:"center"
    }
})

export default About;