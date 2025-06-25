import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getUser } from '../utils/storage';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    const user = await getUser();
    if (user && user.email === usuario && user.cpf === senha) {
      navigation.navigate('Cards');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Usuário (Email)" style={styles.input} onChangeText={setUsuario} />
      <TextInput placeholder="Senha (CPF)" style={styles.input} onChangeText={setSenha} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Cadastrar Usuário" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 }
});