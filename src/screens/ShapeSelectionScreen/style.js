// src/screens/ShapeSelectionScreen/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flexGrow: 1, // Permite que o conteúdo cresça e role
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '80%', // Define a largura dos botões
    marginBottom: 15, // Espaçamento entre os botões
  },
  noShapesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default styles;