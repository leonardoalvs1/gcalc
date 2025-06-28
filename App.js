// App.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'; // Use TouchableOpacity e ImageBackground
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- Importação dos Componentes de Tela (Screens) ---
import DimensionSelectionScreen from './src/screens/DimensionSelectionScreen';
import ShapeSelectionScreen from './src/screens/ShapeSelectionScreen';
import CalculationTypeScreen from './src/screens/CalculationTypeScreen';
import MeasurementInputScreen from './src/screens/MeasurementInputScreen';

// --- Importação dos seus Componentes Reutilizáveis ---
import Title from './src/components/Title';

// Importa a imagem de fundo
const backgroundImage = require('./assets/geometric_background.png'); // AJUSTE O CAMINHO SE NECESSÁRIO!

// Cria uma instância do Stack Navigator
const Stack = createNativeStackNavigator();

// --- Componente da Tela Inicial (HomeScreen) ---
function HomeScreen({ navigation }) {
  return (
    // Usando ImageBackground para uma imagem de fundo
    <ImageBackground source={backgroundImage} style={homeScreenStyles.background}>
      <View style={homeScreenStyles.overlay}> {/* Uma camada para melhorar a legibilidade do texto */}
        {/* Usando o componente Title para o título principal do app */}
        <Text style={homeScreenStyles.subtitle}>
          Sua Calculadora de Formas Geométricas
        </Text>

        <TouchableOpacity
          style={homeScreenStyles.button}
          onPress={() => navigation.navigate('DimensionSelection')}
        >
          <Text style={homeScreenStyles.buttonText}>Começar</Text>
        </TouchableOpacity>

        {/* Configura a barra de status */}
        <StatusBar barStyle="light-content" backgroundColor="#007bff" /> {/* Cor escura para texto na barra */}
      </View>
    </ImageBackground>
  );
}

// --- Estilos para HomeScreen (Adicione isso ANTES do `export default function App()`) ---
import { StyleSheet } from 'react-native';

const homeScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Redimensiona a imagem para cobrir a área
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Camada semi-transparente mais suave para o texto se destacar, permitindo que a imagem apareça mais
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  subtitle: {
    fontSize: 30,
    marginBottom: 550, // Aumenta o espaçamento abaixo do subtítulo
    color: 'rgb(6, 0, 0)', // Cor do texto branca para contraste
    textAlign: 'center',
    fontWeight: '10', // Fonte mais fina
  },
  button: {
    backgroundColor: '#6A1B9A', // Um roxo mais escuro, inspirado nas cores do logo, para um visual mais sofisticado
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30, // Botão mais arredondado
    marginTop: 20,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});


// --- Componente Principal do Aplicativo (Permanece igual) ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Tela Inicial: GCALC */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* Tela de Escolha de Dimensão (2D ou 3D) */}
        <Stack.Screen
          name="DimensionSelection"
          component={DimensionSelectionScreen}
          options={{ title: 'Escolha a Dimensão' }}
        />

        {/* Tela de Escolha de Forma (Quadrado, Cubo, etc.) */}
        <Stack.Screen
          name="ShapeSelection"
          component={ShapeSelectionScreen}
          options={({ route }) => ({ title: `Formas ${route.params.dimension}` })}
        />

        {/* Tela de Escolha do Tipo de Cálculo (Área, Perímetro, Volume) */}
        <Stack.Screen
          name="CalculationType"
          component={CalculationTypeScreen}
          options={({ route }) => ({ title: `Calcular ${route.params.shape}` })}
        />

        {/* Tela de Entrada de Medidas e Resultado (usa o componente Form internamente) */}
        <Stack.Screen
          name="MeasurementInput"
          component={MeasurementInputScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}