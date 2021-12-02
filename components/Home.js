import React from "react";
import {
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    Dimensions,
    View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import mainbg from '../images/sbp-bg.jpg';
import brown from '../images/brown.jpg';
import blue from '../images/blue.jpg';
import green from '../images/green.jpg';


export default function Home({navigation}) {
    
    return(
        <SafeAreaView style={styles.parent}>
            <ImageBackground source={mainbg} style={styles.background}>
                <View style={[{display: 'flex', flexDirection: 'row', width: Dimensions.get('screen').width, justifyContent: 'space-evenly', top: '20%'}, Dimensions.get('screen').width > 1020 ? { top: '35%' } : null]}>
                    <ImageBackground source={brown}><TouchableOpacity style={Dimensions.get('screen').width > 1020 ? styles.ipadsynths : styles.synths} onPress={()=>navigation.navigate('Brown')}></TouchableOpacity></ImageBackground>
                    <ImageBackground source={blue}><TouchableOpacity style={Dimensions.get('screen').width > 1020 ? styles.ipadsynths : styles.synths} onPress={()=>navigation.navigate('Blue')}></TouchableOpacity></ImageBackground>
                    <ImageBackground source={green}><TouchableOpacity style={Dimensions.get('screen').width > 1020 ? styles.ipadsynths : styles.synths} onPress={()=>navigation.navigate('Green')}></TouchableOpacity></ImageBackground>
                </View>
            </ImageBackground>
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
    backgroundColor: '#1E2427'
  },
  parent: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      backgroundColor: '#1E2427'
  },
  synths: {
      
      height: 120,
      width: 120,
      margin: '2%'
  },
  ipadsynths: { 
    height: 200,
    width: 200,
    margin: '2%'
}
});
