//import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NuevoClienteScreen } from './assets/src/presentation/views/clients/NuevoCliente';
import { InicioScreen } from './assets/src/presentation/views/inicio/inicio';
import { EditarClienteScreen } from './assets/src/presentation/views/clients/EditarCliente';
import { ListaClientesScreen } from './assets/src/presentation/views/clients/ListaClientes';

export type RootStackParamList = {
  InicioScreen:         undefined,
  ListaClientesScreen:  undefined,
  NuevoClienteScreen:   undefined,
  EditarClienteScreen:  undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
          name      = 'InicioScreen'
          component = {InicioScreen}
          options   = {{title: 'Inicio', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'NuevoClienteScreen'
          component = {NuevoClienteScreen}
          options   = {{title: 'Nuevo Cliente', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'EditarClienteScreen'
          component = {EditarClienteScreen}
          options   = {{title: 'Editar Cliente', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'ListaClientesScreen'
          component = {ListaClientesScreen}
          options   = {{title: 'Clientes Registrados', headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;