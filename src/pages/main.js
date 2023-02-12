import React, {useState, useContext, useEffect} from 'react'
import { View, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'
import config from '../../config/config.json'


export default function MainScreen()  {
    const {token, ID} = useContext(AuthContext);
    const [vaccines, setVaccines] = useState([])

    const getVaccinesByUser = async () => {
        let request = await fetch(config.url + 'getVaccinesByUser', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({token: token, user: ID})
        })
        let res = await request.json()
        setVaccines(res)
    }

    useEffect(() => {
        let p = getVaccinesByUser()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.container, {marginTop:30}]}>

                    <View style={styles.container}>
                        {vaccines.map((vaccine) => {
                            return (
                                <View>
                                    <Text>{vaccine.vaccine}</Text>
                                    <Text>{vaccine.date.split('T')[0]}</Text>
                                </View>
                                )
                        })}
                    </View>
                
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
};
