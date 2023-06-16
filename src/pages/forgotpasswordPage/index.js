import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function forgotpasswordPage() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recupere a senha</Text>

            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Recuperar</Text>
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
  });