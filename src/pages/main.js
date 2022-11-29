import React, {useState, useContext} from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'


export default function MainScreen({ navigation })  {
    const {logout, token} = useContext(AuthContext);
    console.log(token)
    
    return (
        <View style = {styles.container}>
            
            <TouchableOpacity
            style = {[styles.button, {backgroundColor:'#000000'}]}
            onPress = {() => logout()}
            >
                <Text style={styles.buttonTitle}>SAIR</Text>
            </TouchableOpacity>
        
        <StatusBar style="auto" />
        </View>
    );
};
