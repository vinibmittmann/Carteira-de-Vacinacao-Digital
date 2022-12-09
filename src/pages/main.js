import React, {useContext} from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'


export default function MainScreen({ navigation })  {
    const {logout} = useContext(AuthContext);
    
    return (
        <View style = {styles.container}>
            
            <TouchableOpacity
                style = {[styles.button, {backgroundColor:'#000000'}]}
            onPress = {() => navigation.navigate('addUser')}
            >
                <Text style={styles.buttonTitle}>SAIR</Text>
            </TouchableOpacity>
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
