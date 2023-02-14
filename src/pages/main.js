import React, {useState, useContext, useEffect} from 'react'
import { View, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'
import config from '../../config/config.json'
import AsyncStorage from '@react-native-async-storage/async-storage';


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
                                 <View style={[styles.card, styles.shadow ]} key={vaccine.id}>
                                    <Text style={styles.cardTitle}>{vaccine.vaccine}</Text> 
                                    <View style={styles.cardContent}>
                                        <Text style={styles.textContent}>Última Dose</Text>
                                        <Text style={styles.textContent}>{vaccine.date.split('T')[0]}</Text>
                                        {/* <Text style={styles.textContent}>Download</Text> */}
                                    </View>        
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
