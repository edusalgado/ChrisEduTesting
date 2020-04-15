import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import LoginScreen from './screens/LoginScreen';


export default function App() {
  return ( 
    <View style={styles.screen}>
      <LoginScreen/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
});