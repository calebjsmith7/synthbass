import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions,
    View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Sound from "react-native-sound";
import eighto from '../sounds/808/newdrop.wav';
import C from '../sounds/Bass2/aidenC.wav';
import Csharp from '../sounds/Bass2/aidenCsh.wav';
import D from '../sounds/Bass2/aidenD.wav';
import Dsharp from '../sounds/Bass2/aidenDsh.wav';
import E from '../sounds/Bass2/aidenE.wav';
import F from '../sounds/Bass2/aidenF.wav';
import Fsharp from '../sounds/Bass2/aidenFsh.wav';
import G from '../sounds/Bass2/aidenG.wav';
import Gsharp from '../sounds/Bass2/aidenGsh.wav';
import A from '../sounds/Bass2/aidenA.wav';
import Asharp from '../sounds/Bass2/aidenAsh.wav';
import B from '../sounds/Bass2/aidenB.wav';
import Chigh from '../sounds/Bass2/aidenChigh.wav';




export default function BKeyboard(){

    
    Sound.setCategory('Playback');
    var eightoheight = new Sound(eighto);
    var c = new Sound(C);
    var csharp = new Sound(Csharp);
    var d = new Sound(D);
    var dsharp = new Sound(Dsharp);
    var e = new Sound(E);
    var f = new Sound(F);
    var fsharp = new Sound(Fsharp);
    var g = new Sound(G);
    var gsharp = new Sound(Gsharp);
    var a = new Sound(A);
    var asharp = new Sound(Asharp);
    var b = new Sound(B);
    var chigh = new Sound(Chigh);

   

    // play function for each note that accepts parameter of object *excluding 808 note
    playit = (note) => {
      note.setVolume(0);
          
        
        note.setNumberOfLoops(-1).play((success) =>{
            if(success){
            console.log('success');
            }
         else {
            console.log('not successful')
        }});

        var gainup = setInterval(()=>{
          if(note.getVolume() < 1){
            note.setVolume(note.getVolume() + .1);
            console.log(note.getVolume());
          } else {
            null;
            console.log(null);
          }
        }, 35);

        setTimeout(()=>{
          clearInterval(gainup);
        }, 500)
    }

    // stop function for each note that is played immediately on press out *excluding 808 note. reduces volume to zero before stopping to avoid popping sound
    stopit = (note) => {

      if(note.getVolume() > .5){
        var gaindown = setInterval(()=>{
          note.setVolume(note.getVolume() - .10);
          console.log(note.getVolume());
        },50);
 
         setTimeout(()=>{
           clearInterval(gaindown);
             note.setVolume(0);
             note.stop();
         },500);
      }
      else {
        note.setVolume(0);
        note.stop();
      }

       
    }

    // play function for 808 note that executes play one time and does not loop or stop it
    playEightOhEight = (note) => {
        note.play((success) =>{
            if(success){
            console.log('success');
            }
         else {
            console.log('not successful')
        }})
    }


    return(
        <SafeAreaView style={Dimensions.get('screen').height > 700 ? styles.ipadparent : Dimensions.get('screen').height > 425 ? styles.maxparent : styles.parent}>
            <View style={styles.whites}>
                <TouchableOpacity style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onPress={()=> playEightOhEight(eightoheight)}><Text style={{ width: '50%', textAlign: 'center', marginTop: 265, marginLeft: 'auto', marginRight: 'auto', fontSize: 17, fontWeight: "bold", borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}}>808</Text></TouchableOpacity>
                <View style={styles.notactive}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(c)} onTouchEnd={()=> stopit(c)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(d)} onTouchEnd={()=> stopit(d)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(e)} onTouchEnd={()=> stopit(e)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(f)} onTouchEnd={()=> stopit(f)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(g)} onTouchEnd={()=> stopit(g)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(a)} onTouchEnd={()=> stopit(a)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(b)} onTouchEnd={()=> stopit(b)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigwhite : Dimensions.get('screen').width > 1000 ? styles.semibigwhite : styles.white} onTouchStart={()=> playit(chigh)} onTouchEnd={()=> stopit(chigh)}/>
            </View>
            <View style={Dimensions.get('screen').width > 1300 ? styles.ipadmax : Dimensions.get('screen').width > 1000 ? styles.ipad : Dimensions.get('screen').width > 820 ? styles.iphonemax : styles.blacks}>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigblack : Dimensions.get('screen').width > 1000 ? styles.semibigblack : styles.black} onTouchStart={()=> playit(csharp)} onTouchEnd={()=> stopit(csharp)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigblack : Dimensions.get('screen').width > 1000 ? styles.semibigblack : styles.black} onTouchStart={()=> playit(dsharp)} onTouchEnd={()=> stopit(dsharp)}/>
                <View style={styles.none}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigblack : Dimensions.get('screen').width > 1000 ? styles.semibigblack : styles.black} onTouchStart={()=> playit(fsharp)} onTouchEnd={()=> stopit(fsharp)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigblack : Dimensions.get('screen').width > 1000 ? styles.semibigblack : styles.black} onTouchStart={()=> playit(gsharp)} onTouchEnd={()=> stopit(gsharp)}/>
                <View style={Dimensions.get('screen').width > 1300 ? styles.bigblack : Dimensions.get('screen').width > 1000 ? styles.semibigblack : styles.black} onTouchStart={()=> playit(asharp)} onTouchEnd={()=> stopit(asharp)}/>
                <View style={styles.none}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  
  parent: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height -35,
      backgroundColor: '#877B66',
      position: "absolute",
      top: 35
  },
  maxparent: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height -35,
    backgroundColor: '#877B66',
    position: "absolute",
    top: 50
},
ipadparent: {
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height -35,
  backgroundColor: '#877B66',
  position: "absolute",
  top: 75
},
  whites: {
    display: "flex",
    flexDirection: "row",
    zIndex: 1
  },
  white: {
    borderColor: 'black',
    width: 75,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'white',
    zIndex: 4
  },
  bigwhite: {
    borderColor: 'black',
    width: 120,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'white',
    zIndex: 4
  },
  semibigwhite: {
    borderColor: 'black',
    width: 100,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'white',
    zIndex: 4
  },
    notactive: {
    borderColor: 'black',
    width: 75,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#877B66',
    zIndex: 4
  },
  blacks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    position: "absolute",
    top: 0 ,
    left: 200,
    width: '69%',
    height: '55%',
    zIndex: 1
  },
  ipad: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    position: "absolute",
    top: 0 ,
    left: '22%',
    width: '72%',
    height: '55%',
    zIndex: 1 
  },
  iphonemax: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    position: "absolute",
    top: 0 ,
    left: '28%',
    width: '60.5%',
    height: '55%',
    zIndex: 1 
  },
  ipadmax: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    position: "absolute",
    top: 0 ,
    left: '24%',
    width: '65%',
    height: '55%',
    zIndex: 1 
  },
  black:{
    width: 38,
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 1,
    marginRight: 1,
    zIndex: 5
  },
  bigblack:{
    width: 65,
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 1,
    marginRight: 1,
    zIndex: 5
  },
  semibigblack:{
    width: 60,
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 1,
    marginRight: 1,
    zIndex: 5
  },
  none:{
    width: 38,
    height: '100%',
    backgroundColor: 'transparent',
    marginLeft: 1,
    marginRight: 1
  },
});
