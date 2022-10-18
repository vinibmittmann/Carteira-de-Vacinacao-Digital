import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles'


const Login = () => {
    const Login = createStackNavigator();
  
    return (
        <View style = {styles.container}>
            
            <Text style={styles.logo}>CARTEIRA</Text>
            <Text style={styles.logo}>DE VACINAÇÃO</Text>
            <Text style={[styles.logo, {paddingBottom: 115}]}>DIGITAL</Text>
            
            <TextInput
            style = {styles.textInput}
            placeholder = "CPF / e-mail"
            />

            <TextInput
            style = {styles.textInput}
            placeholder = "Senha"
            />

            <TouchableOpacity
            //style = {}
            >
                <Text style={styles.link}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            >
                <Text style={styles.buttonTitle}>ENTRAR</Text>
            </TouchableOpacity>
        
        <StatusBar style="auto" />
        </View>
  );
};

export default Login;
