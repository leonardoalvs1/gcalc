// src/components/Form/ResultGCALC/index.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function ResultGCALC({ result, calculationType }) {
  if (result === null) {
    return <View />; // Não exibe nada se não houver resultado
  }

  // Define a unidade com base no tipo de cálculo
  let unit = '';
  if (calculationType === 'Area' || calculationType === 'SurfaceArea') {
    unit = ' cm\u00B2'; // Caractere de "ao quadrado"
  } else if (calculationType === 'Volume') {
    unit = ' cm\u00B3'; // Caractere de "ao cubo"
  } else if (calculationType === 'Perimeter') {
    unit = ' cm'; // Caractere para perímetro/comprimento
  }

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultLabel}>Resultado:</Text>
      <Text style={styles.resultValue}>
        {result}{unit}
      </Text>
    </View>
  );
}