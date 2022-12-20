import React, {useState, useContext, UseEffect, Component} from 'react'
import { View, TouchableOpacity, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../../styles'
import {AuthContext} from '../../contexts/auth'
import config from '../../../config/config.json'
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {

    constructor(props){   
        super(props);
        this.state = {  
          cards: [],
          rendering: true,
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('TOKEN', (err, result) => {
            this.loadHistory(result);
          });
    }

    loadHistory = async (token_result) => {
        let request = await fetch(config.url + 'getHistorico', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({token: token_result})
        })
        // .then(data => {            
        //     this.setState({cards: data, rendering: false});
        // });
        
        let res = await request.json()
        if (res.status === 'fail') {
            this.setState({cards: [], rendering: false});
        }
        else {
            this.setState({cards: res, rendering: false});
        }
    }

    renderCard(item){
        return(
            <View style={[styles.card, styles.shadow ]}>
                <Text style={styles.cardTitle}>{item.vacina}</Text> 
                <View style={styles.cardContent}>
                    <Text style={styles.textContent}>Última Dose: {item.createdAt}</Text>
                    <Text style={styles.textContent}>Dose Reforço: {item.createdAt}</Text>
                    <Text style={styles.textContent}>Download</Text>
                </View>        
            </View>
        );
    };

    render(){
        if(this.state.rendering == false && !(this.state.cards == undefined)){
            return (
                <View style={[styles.container, {marginTop:30}]}>    
                    <FlatList
                        data={this.state.cards}
                        renderItem={({item}) => this.renderCard(item)}
                    />
                    <StatusBar style="auto" />
                </View>
            );
        }else{
            return (
                <View>
                    <Text>Carregando</Text>
                </View>
            )        
        } 
    }

    
};

export default Home;
