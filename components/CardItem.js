import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function CardItem({ item, onDelete, onDetails }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.name}</Text>
      <Button title="Ver Mais Detalhes" onPress={onDetails} />
      <Button title="Excluir" onPress={() => onDelete(item.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5 },
  image: { width: 100, height: 100 }
});