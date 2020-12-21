import React from 'react';
import { StyleSheet, Text, View , Image ,ImageBackground,ActivityIndicator, TextInput,Button,TouchableOpacity,ScrollView , FlatList} from 'react-native';



function Contact (){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>
            Contact
            </Text>
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

export default Contact;