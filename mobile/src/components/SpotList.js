import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empresas que usam <Text style={styles.bold}> {tech}</Text>!
      </Text>

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View styles={styles.listItem}>
            <Image styles={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
            <Text styles={styles.company}>{item.company}</Text>
            <Text styles={styles.company}>{item.thumbnail_url}</Text>
            <Text style={styles.price}>{item.price ? `R$ ${item.price}` : `GRATUITO`}</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },

  title: {
    fontSize: 18,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15
  },

  bold: {
    fontWeight: 'bold'
  },

  list: {
    paddingHorizontal: 20
  },

  listItem: {
    marginRight: 15
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2
  },

  company: {},

  price: {},

  button: {},

  buttonText: {}
});
