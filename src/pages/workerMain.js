import React, {useState, useContext} from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'


export default function WorkerMainScreen({ navigation })  {
    const [email, setEmailUser] = useState(null);
    const [password, setPasswordUser] = useState(null);
    const {logout, username} = useContext(AuthContext);
    
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
