import { Link } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginPage() {

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Usuário:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome de usuário"
        />
  
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
  
        <TouchableOpacity style={styles.button}>
          <Link to={{screen: "RPGPage"}} style={styles.buttonText}>Login</Link>
        </TouchableOpacity>

          <Link to={{screen: "RegisterPage"}} style={styles.Text2}>Registre-se</Link>
          <Link to={{screen: "forgotpasswordPage"}} style={styles.Text2}>Esqueceu a senha?</Link>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 8,
    },
    button: {
      backgroundColor: '#0066cc',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 6,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    Text2:{
      marginTop: 16,
      color: '#0066cc',
      fontSize: 16,
      textDecorationLine: 'underline',
      marginBottom: 5
    }
  });