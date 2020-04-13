import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserLogin from './components/UserLogin';
import PasswordLogin from './components/PasswordLogin';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/Colors';


export default function App() {
  return (
    <LinearGradient
        colors={[Colors.backgroundGradientTop, Colors.backgroundGradientMid, Colors.backgroundGradientBottom]}
        style={{flex: 1}}
        >
      <View style={styles.mainContainer}>
      
      <View style={styles.buttonContainer} >
        <UserLogin/>
      </View>
      <View style={styles.buttonContainer}>
       <PasswordLogin/>
      </View>

    </View>
      </LinearGradient>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonContainer:{
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});