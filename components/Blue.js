import React from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions,
    View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import BlKeyboard from "./BlKeyboard";


export default function Blue({navigation}) {
    
    return(
        <SafeAreaView style={styles.parent}>
            <View style={[{width: '100%', display: 'flex', flexDirection: "row-reverse", justifyContent: 'space-between', minHeight: '100%', marginBottom: '5%', marginTop: '4%'}, Dimensions.get('screen').height > 425 ? { marginTop: '6%'} : null]}>
            <Text style={{fontSize: 30, color: 'white'}}>Blue</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Text style={{fontSize: 30, color: 'white'}}>ᐊ</Text></TouchableOpacity>
            </View>
            <BlKeyboard/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  background : {
    flex: 1,
    alignSelf: "stretch",
    resizeMode: "cover",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: "absolute",
    top: 0,
  },
  parent: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      backgroundColor: '#013a63'
  },
  synths: {
      
      height: 120,
      width: 120,
      margin: '2%',
      backgroundColor: 'FFFFFF'
  }
});
