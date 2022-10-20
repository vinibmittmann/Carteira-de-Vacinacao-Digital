import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'


export default function LoginScreen({ navigation })  {
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
            >
                <Text style={styles.link}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress = {() => navigation.navigate("Cadastro Paciente")}
            >
                <Text style={styles.buttonTitle}>ENTRAR</Text>
                
            </TouchableOpacity>
        
        <StatusBar style="auto" />
        </View>
    );
};
