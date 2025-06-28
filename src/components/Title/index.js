// src/components/Title/index.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'; // Importa os estilos

export default function Title({ text }) { // Adicionamos a prop 'text'
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}