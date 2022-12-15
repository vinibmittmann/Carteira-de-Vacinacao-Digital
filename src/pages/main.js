import React, {useContext} from 'react'
import { View, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'
import { Button, Menu, Divider, Provider } from 'react-native-paper';


export default function MainScreen({ navigation })  {
    const {logout} = useContext(AuthContext);

    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.container, {marginTop:30}]}>
                
                
                <View style={[styles.card, styles.shadow ]}>
                        <Text style={styles.cardTitle}>Covid 19</Text> 
                        <View style={styles.cardContent}>
                            <Text style={styles.textContent}>Última Dose: 19/04/2022</Text>
                            <Text style={styles.textContent}>Dose Reforço: 19/04/2028</Text>
                            <Text style={styles.textContent}>Download</Text>
                        </View>        
                    </View>
                    <View style={[styles.card, styles.shadow ]}>
                        <Text style={styles.cardTitle}>Tétano</Text> 
                        <View style={styles.cardContent}>
                            <Text style={styles.textContent}>Última Dose: 19/04/2022</Text>
                            <Text style={styles.textContent}>Dose Reforço: 19/04/2028</Text>
                            <Text style={styles.textContent}>Download</Text>
                        </View>        
                    </View>
                    <View style={[styles.card, styles.shadow ]}>
                        <Text style={styles.cardTitle}>Gripe h1n1</Text> 
                        <View style={styles.cardContent}>
                            <Text style={styles.textContent}>Última Dose: 19/04/2022</Text>
                            <Text style={styles.textContent}>Dose Reforço: 19/04/2028</Text>
                            <Text style={styles.textContent}>Download</Text>
                        </View>        
                    </View>
                    <View style={[styles.card, styles.shadow ]}>
                        <Text style={styles.cardTitle}>Covid 19</Text> 
                        <View style={styles.cardContent}>
                            <Text style={styles.textContent}>Última Dose: 19/04/2022</Text>
                            <Text style={styles.textContent}>Dose Reforço: 19/04/2028</Text>
                            <Text style={styles.textContent}>Download</Text>
                        </View>        
                    </View>
                    <View style={[styles.card, styles.shadow ]}>
                        <Text style={styles.cardTitle}>Covid 19</Text> 
                        <View style={styles.cardContent}>
                            <Text style={styles.textContent}>Última Dose: 19/04/2022</Text>
                            <Text style={styles.textContent}>Dose Reforço: 19/04/2028</Text>
                            <Text style={styles.textContent}>Download</Text>
                        </View>        
                    </View>
                    


                    
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
            </ScrollView>
        </SafeAreaView>
        
    );
};
