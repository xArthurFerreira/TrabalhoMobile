import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { saveUser } from '../utils/storage';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  const handleSalvar = async () => {
    await saveUser({ nome, telefone, cpf, email, curso });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
      <TextInput placeholder="Telefone" style={styles.input} onChangeText={setTelefone} />
      <TextInput placeholder="CPF (será usado como senha)" style={styles.input} onChangeText={setCpf} />
      <TextInput placeholder="E-mail" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Curso" style={styles.input} onChangeText={setCurso} />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 }
});