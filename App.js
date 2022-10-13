import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 36,
    backgroundColor: "#FAFAFA",
    marginVertical: 10,
    includeFontPadding: true,
    paddingLeft: 5,
    }
});