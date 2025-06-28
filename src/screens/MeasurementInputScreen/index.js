// src/screens/MeasurementInputScreen/index.js (VERSÃO ATUALIZADA)
import React from 'react';
import { View, Text } from 'react-native'; // Remove TextInput, Button, Alert, ScrollView
import styles from './style'; // Agora este style.js é para a tela, não para os inputs
import Form from '../../components/Form'; // Importa o componente Form
import Title from '../../components/Title'; // Importa o componente Title

export default function MeasurementInputScreen({ route }) {
  const { dimension, shape, calculationType } = route.params;

  return (
    <View style={styles.container}>
      {/* Usando o componente Title aqui */}
      <Title text={`${calculationType} do ${shape}`} />

      {/* Passando as props para o componente Form */}
      <Form
        dimension={dimension}
        shape={shape}
        calculationType={calculationType}
      />
    </View>
  );
}