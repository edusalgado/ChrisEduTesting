import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MainButton = props => {
    return <TouchableOpacity activeOpacity= {0.6} onPress = {props.onPress}>
        <View style = {styles.button}>
            <Text style = {styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'rgba(355, 355, 355, 0.3)',
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 105,
    },
    buttonText:{
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    }
});

export default MainButton;