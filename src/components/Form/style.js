// src/components/Form/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    width: '100%', // Ocupa a largura total disponível
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  inputGroup: {
    width: '90%',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#495057',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 30,
    marginBottom: 20,
  },
  noInputsText: {
    fontSize: 16,
    color: '#dc3545',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;