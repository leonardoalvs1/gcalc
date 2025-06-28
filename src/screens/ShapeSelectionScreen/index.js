// src/screens/ShapeSelectionScreen/index.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import styles from './style'; // Importa os estilos

// Mapeamento de formas para cada dimensão
const shapes = {
  '2D': [
    { name: 'Quadrado', key: 'Square' },
    { name: 'Retângulo', key: 'Rectangle' },
    { name: 'Círculo', key: 'Circle' },
    { name: 'Triângulo', key: 'Triangle' },
    { name: 'Losango', key: 'Rhombus' },
    { name: 'Trapézio', key: 'Trapezoid' },
  ],
  '3D': [
    { name: 'Cubo', key: 'Cube' },
    { name: 'Esfera', key: 'Sphere' },
    { name: 'Cilindro', key: 'Cylinder' },
    { name: 'Cone', key: 'Cone' },
    { name: 'Pirâmide', key: 'Pyramid' },
  ],
};

export default function ShapeSelectionScreen({ route, navigation }) {
  // Recebe os parâmetros passados da tela anterior (dimension)
  const { dimension } = route.params;

  // Filtra as formas baseadas na dimensão recebida
  const currentShapes = shapes[dimension] || [];

  return (
    <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escolha a Forma {dimension}:</Text>
      {currentShapes.length > 0 ? (
        currentShapes.map((shape) => (
          <View key={shape.key} style={styles.buttonWrapper}>
            <Button
              title={shape.name}
              onPress={() => navigation.navigate('CalculationType', { dimension: dimension, shape: shape.key })}
              color="#007bff"
            />
          </View>
        ))
      ) : (
        <Text style={styles.noShapesText}>Nenhuma forma disponível para {dimension}.</Text>
      )}
    </ScrollView>
  );
}