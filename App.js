import { StatusBar } from 'expo-status-bar';
import { View, TextInput } from 'react-native';
import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.container}>
        
        <TextInput
          style={styles.textInput}
          placeholder = "CPF / e-mail"
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "Senha"
        />
      
      <StatusBar style="auto" />
    </View>
  );
};
