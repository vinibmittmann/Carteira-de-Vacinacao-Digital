import { StatusBar } from 'expo-status-bar';
import { View, Text,TextInput, Button, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <View style >
        <Text style ={styles.title}>Novo Usuário</Text>
      </View>

        <TextInput
          style={styles.textInput}
          placeholder = "Nome"
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "CPF"
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "Senha"
        />        
      
        <TextInput
          style = {styles.textInput}
          placeholder = "Data de Nascimento"
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "E-mail"
        />

        <TouchableOpacity
          style = {styles.buttonPaciente}
          >
            <Text style = {styles.buttonTitle}>Confirmar Cadastro</Text>
          </TouchableOpacity>
        
      <StatusBar style="auto" />
    </View>
  );
};
