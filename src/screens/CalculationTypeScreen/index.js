// src/screens/CalculationTypeScreen/index.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style'; // Importa os estilos

export default function CalculationTypeScreen({ route, navigation }) {
  // Recebe os parâmetros passados da tela anterior (dimension e shape)
  const { dimension, shape } = route.params;

  // Define as opções de cálculo baseadas na dimensão
  const calculationOptions = dimension === '2D'
    ? [
        { name: 'Área', key: 'Area' },
        { name: 'Perímetro', key: 'Perimeter' },
      ]
    : [ // Para 3D
        { name: 'Área da Superfície', key: 'SurfaceArea' },
        { name: 'Volume', key: 'Volume' },
      ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calcular {shape} ({dimension})
      </Text>
      <Text style={styles.subtitle}>O que você deseja calcular?</Text>
      <View style={styles.buttonContainer}>
        {calculationOptions.map((option) => (
          <View key={option.key} style={styles.buttonWrapper}>
            <Button
              title={option.name}
              onPress={() => navigation.navigate('MeasurementInput', {
                dimension: dimension,
                shape: shape,
                calculationType: option.key, // Passa o tipo de cálculo escolhido
              })}
              color="#17a2b8" // Exemplo de cor para os botões de cálculo
            />
          </View>
        ))}
      </View>
    </View>
  );
}