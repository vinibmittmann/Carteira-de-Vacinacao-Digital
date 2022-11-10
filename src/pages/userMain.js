import React, {useState, useContext} from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'


export default function UserMainScreen({ navigation })  {
    const [email, setEmailUser] = useState(null);
    const [password, setPasswordUser] = useState(null);
    const {logout} = useContext(AuthContext);
    
    return (
        <View style = {styles.container}>

            <TouchableOpacity
            style = {styles.button}
            onPress = {() => logout()}
            >
                <Text style={styles.buttonTitle}>SAIR</Text>
            </TouchableOpacity>
        
        <StatusBar style="auto" />
        </View>
    );
};
