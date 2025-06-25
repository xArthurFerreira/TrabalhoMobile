import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import CardItem from '../components/CardItem';

export default function CardsScreen({ navigation }) {
  const [cards, setCards] = useState([]);
  const [id, setId] = useState('');

  const addCard = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setCards([...cards, data]);
      setId('');
    } catch (error) {
      alert('Erro ao buscar personagem');
    }
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="ID do personagem" value={id} onChangeText={setId} style={styles.input} />
      <Button title="ADD" onPress={addCard} />
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardItem item={item} onDelete={deleteCard} onDetails={() => navigation.navigate('Detalhes', { character: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 }
});