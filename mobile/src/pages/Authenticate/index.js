import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

export default function Authenticate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();

  async function handleAuthentication(event) {
    event.preventDefault();
    try {
      const response = await api.post('/auth/authenticate', {
        email,
        password,
      });
      console.log(response.data);
      setEmail('');
      setPassword('');
      nav.navigate('Home', {
        user: response.data.user,
        auth: true,
      });
    } catch (err) {
      Alert.alert('Senha ou E-mail inválidos!');
      console.log(err.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Insira seu e-mail e senha:</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#ddd"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        placeholderTextColor="#ddd"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Autenticar"
          onPress={handleAuthentication}
          color="#a20"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Registrar nova Conta"
          onPress={() => {
            nav.navigate('Register');
            setEmail('');
            setPassword('');
          }}
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
