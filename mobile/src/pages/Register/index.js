import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, View, TextInput, Text, StyleSheet, Button} from 'react-native';
import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
      });
      Alert.alert('Nova conta criada com sucesso!');
      nav.navigate('Authenticate', {
        state: response.data,
      });
    } catch (err) {
      Alert.alert('Usuário já existe ou valores inválidos!');
      console.log(err.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Registrar nova Conta:</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome"
        placeholderTextColor="#ddd"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#ddd"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        placeholderTextColor="#ddd"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Registrar nova Conta"
          onPress={handleRegister}
          color="#a20"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7954ff',
    justifyContent: 'center',
  },
  instructionText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff',
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    width: 150,
    marginTop: 10,
  },
});
