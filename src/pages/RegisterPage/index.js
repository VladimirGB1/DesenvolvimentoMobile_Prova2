import { Link } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterPage() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" />

            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}>
                <Link to={{screen: "LoginPage"}} style={styles.buttonText}>Registrar</Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginLink}>
                <Link to={{screen: "LoginPage"}} style={styles.loginText}>Já possui uma conta? Faça login</Link>
            </TouchableOpacity>
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
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
      marginBottom: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    loginLink: {
      marginTop: 16,
    },
    loginText: {
      color: '#0066cc',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });