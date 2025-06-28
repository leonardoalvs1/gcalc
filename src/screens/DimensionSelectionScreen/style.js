// src/screens/DimensionSelectionScreen/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo suave
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row', // Botões lado a lado
    justifyContent: 'space-around', // Espaço entre eles
    marginTop: 20,
  },
  // Você pode adicionar estilos específicos para os botões aqui se quiser estilizá-los mais
});

export default styles;