// src/components/Form/index.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import styles from './style'; // Estilos para o formulário
import ResultGCALC from './ResultGCALC'; // Importa o componente de resultado

// Funções de cálculo (podem ser movidas para um arquivo de utilidades mais tarde)
const calculate = (shape, type, measurements) => {
  let result = null;
  const { side, length, width, height, radius } = measurements;

  switch (shape) {
    // --- FORMAS 2D ---
    case 'Square':
      if (type === 'Area') {
        result = side * side;
      } else if (type === 'Perimeter') {
        result = 4 * side;
      }
      break;
    case 'Rectangle':
      if (type === 'Area') {
        result = length * width;
      } else if (type === 'Perimeter') {
        result = 2 * (length + width);
      }
      break;
    case 'Circle':
      if (type === 'Area') {
        result = Math.PI * radius * radius;
      } else if (type === 'Perimeter') {
        result = 2 * Math.PI * radius;
      }
      break;
    // --- FORMAS 3D ---
    case 'Cube':
      if (type === 'Volume') {
        result = side * side * side;
      } else if (type === 'SurfaceArea') {
        result = 6 * side * side;
      }
      break;
    case 'Sphere':
      if (type === 'Volume') {
        result = (4 / 3) * Math.PI * radius * radius * radius;
      } else if (type === 'SurfaceArea') {
        result = 4 * Math.PI * radius * radius;
      }
      break;
    default:
      result = 'Forma ou cálculo não implementado.';
      break;
  }
  return typeof result === 'number' ? result.toFixed(2) : result;
};

// Define os campos de entrada necessários para cada forma
const getRequiredInputs = (currentShape) => {
  switch (currentShape) {
    case 'Square':
      return [{ label: 'Lado (cm)', key: 'side', keyboardType: 'numeric' }];
    case 'Rectangle':
      return [{ label: 'Comprimento (cm)', key: 'length', keyboardType: 'numeric' },
              { label: 'Largura (cm)', key: 'width', keyboardType: 'numeric' }];
    case 'Circle':
      return [{ label: 'Raio (cm)', key: 'radius', keyboardType: 'numeric' }];
    case 'Cube':
      return [{ label: 'Lado (cm)', key: 'side', keyboardType: 'numeric' }];
    case 'Sphere':
      return [{ label: 'Raio (cm)', key: 'radius', keyboardType: 'numeric' }];
    default:
      return [];
  }
};

export default function Form({ dimension, shape, calculationType }) {
  const [measurements, setMeasurements] = useState({});
  const [result, setResult] = useState(null);

  const inputs = getRequiredInputs(shape);

  const handleCalculate = () => {
    const allInputsFilled = inputs.every(input => measurements[input.key] !== undefined && measurements[input.key] !== '');

    if (!allInputsFilled) {
      Alert.alert('Erro', 'Por favor, preencha todas as medidas necessárias.');
      return;
    }

    const parsedMeasurements = {};
    inputs.forEach(input => {
      parsedMeasurements[input.key] = parseFloat(measurements[input.key]);
    });

    const calculatedResult = calculate(shape, calculationType, parsedMeasurements);
    setResult(calculatedResult);
  };

  const handleClear = () => {
    setMeasurements({});
    setResult(null);
  };

  return (
    <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.container}>
      {inputs.length > 0 ? (
        inputs.map((input) => (
          <View key={input.key} style={styles.inputGroup}>
            <Text style={styles.label}>{input.label}:</Text>
            <TextInput
              style={styles.input}
              keyboardType={input.keyboardType || 'default'}
              placeholder={`Digite o ${input.label.toLowerCase().replace('(cm)', '').trim()}`}
              value={measurements[input.key] || ''}
              onChangeText={(text) => setMeasurements({ ...measurements, [input.key]: text })}
            />
          </View>
        ))
      ) : (
        <Text style={styles.noInputsText}>
          Configuração de entrada para {shape} não disponível.
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="Calcular"
          onPress={handleCalculate}
          color="#007bff"
        />
        <View style={{ width: 10 }} />
        <Button
          title="Limpar"
          onPress={handleClear}
          color="#dc3545"
        />
      </View>

      <ResultGCALC result={result} calculationType={calculationType} />
    </ScrollView>
  );
}