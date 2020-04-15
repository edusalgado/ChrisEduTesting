import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import UserLogin from '../components/UserLogin';
import PasswordLogin from '../components/PasswordLogin';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';



const LoginScreen = props => {

  const [passwordValue, setPasswordValue] = useState('');

  const [userValue, setUserValue] = useState('');
    return (
      <LinearGradient
          colors={[Colors.backgroundGradientTop, Colors.backgroundGradientMid, Colors.backgroundGradientBottom]}
          style={{flex: 1}}
          >
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
          <Image
                source={require('../assets/logo-squit.png')}
                style={styles.logoImage}
              />
          </View>
          <Text style={styles.logoText} numberOfLines={2}>Tu fiesta como nunca antes la habías visto</Text>
          <View style={styles.buttonContainer} >
            <UserLogin value={userValue} onChangeText={(user) => setUserValue(user)}/>
          </View>
          <View style={styles.buttonContainer}>
          <PasswordLogin value={passwordValue} onChangeText={(pwd) => setPasswordValue(pwd)}/>
          </View>
          <View style={styles.mainButton}>
            <MainButton onPress={() => {}}>Iniciar sesión</MainButton>
          </View>
          <View style={{paddingTop:20}}> 
            <Text style={{color: 'white'}}>He olvidado mi contraseña</Text>
          </View>
          <View style={{paddingTop:40}}>
            <Text style={{color: 'white',
                        textAlign:'center',}}>
                  ¿Usuario nuevo? {'\n\n'} Crear una cuenta gratuita >
            </Text>
          </View>
  
      </View>
        </LinearGradient>
  
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',

  },

  buttonContainer:{
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  logoContainer:{
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 25,
    width: '100%',
    height: '100%'
  },
  logoImage:{
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  logoText:{
    paddingTop: 240,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  mainButton:{
    paddingTop: 20,
  }
});

export default LoginScreen;