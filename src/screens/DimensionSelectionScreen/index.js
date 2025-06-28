// src/screens/DimensionSelectionScreen/index.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style'; // Importa os estilos

export default function DimensionSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a Dimensão:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Formas 2D"
          onPress={() => navigation.navigate('ShapeSelection', { dimension: '2D' })}
          color="#007bff" // Exemplo de cor
        />
        <Button
          title="Formas 3D"
          onPress={() => navigation.navigate('ShapeSelection', { dimension: '3D' })}
          color="#28a745" // Exemplo de cor
        />
      </View>
    </View>
  );
}