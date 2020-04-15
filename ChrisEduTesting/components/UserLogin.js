import React, { useState }from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Colors from '../constants/Colors';
const UserLogin = props => {

    return(

        <View style={styles.input}>
            <AntDesign style={styles.icon} name="user" size={20}/>
            <TextInput style={styles.inputText} 
                placeholder="Nombre de usuario"
                onChangeText={props.onChangeText}
                value={props.value}
            ></TextInput>
        </View>

    )
}

const styles = StyleSheet.create({

    input:{
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: Colors.buttonBackground,
        width:'80%',
        paddingVertical: 10,

    },
    inputText:{
        color: Colors.buttonText,
        fontWeight: 'bold',
    },
    icon:{
        marginHorizontal: 15,
        color: Colors.iconsColor,
    }

})

export default UserLogin