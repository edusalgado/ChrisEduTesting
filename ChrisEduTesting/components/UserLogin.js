import React, { useState }from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Colors from '../constants/Colors';
const UserLogin = props => {

    const [value, onChangeText] = useState('');

    return(

        <View style={styles.input}>
            <AntDesign style={styles.icon} name="user" size={20}/>
            <TextInput style={styles.inputText} 
                placeholder="Enter user name"
                onChangeText={text => onChangeText(text)}
                value={value}
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
        paddingVertical: 3,

    },
    inputText:{
        color: Colors.buttonText,
        fontWeight: 'bold',
    },
    icon:{
        marginHorizontal: 10,
        color: Colors.iconsColor,
    }

})

export default UserLogin