import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.title}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Última Localização: {character.location.name}</Text>
      <Text>Primeiro Episódio: {character.episode[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' }
});