//import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InicioScreen } from './assets/src/presentation/views/inicio/inicio';

import { NuevoClienteScreen } from './assets/src/presentation/views/clients/NuevoCliente';
import { EditarClienteScreen } from './assets/src/presentation/views/clients/EditarCliente';
import { ListaClientesScreen } from './assets/src/presentation/views/clients/ListaClientes';
import { EliminarClienteScreen } from './assets/src/presentation/views/clients/EliminarCliente';

import { NuevoAgenteScreen } from './assets/src/presentation/views/agents/NuevoAgente';
import { EditarAgenteScreen } from './assets/src/presentation/views/agents/EditarAgente';
import { EliminarAgenteScreen } from './assets/src/presentation/views/agents/EliminarAgente';
import { ListaAgentesScreen } from './assets/src/presentation/views/agents/ListaAgentes';

import { NuevaPolizaScreen } from './assets/src/presentation/views/policies/NuevaPoliza';
import { EditarPolizaScreen } from './assets/src/presentation/views/policies/EditarPoliza';
import { EliminarPolizaScreen } from './assets/src/presentation/views/policies/EliminarPoliza';
import { ListaPolizasScreen } from './assets/src/presentation/views/policies/ListaPolizas';

import { NuevoReclamoScreen } from './assets/src/presentation/views/claims/NuevoReclamo';
import { EditarReclamoScreen } from './assets/src/presentation/views/claims/EditarReclamo';
import { EliminarReclamoScreen } from './assets/src/presentation/views/claims/EliminarReclamo';
import { ListaReclamosScreen } from './assets/src/presentation/views/claims/ListaReclamos';

export type RootStackParamList = {
  InicioScreen:           undefined,

  ListaClientesScreen:    undefined,
  NuevoClienteScreen:     undefined,
  EditarClienteScreen:    undefined,
  EliminarClienteScreen:  undefined,

  ListaAgentesScreen:     undefined,
  NuevoAgenteScreen:      undefined,
  EditarAgenteScreen:     undefined,
  EliminarAgenteScreen:   undefined,

  NuevaPolizaScreen:      undefined,
  EditarPolizaScreen:     undefined,
  EliminarPolizaScreen:   undefined,
  ListaPolizasScreen:     undefined,

  NuevoReclamoScreen:     undefined,
  EditarReclamoScreen:    undefined,
  EliminarReclamoScreen:  undefined,
  ListaReclamosScreen:    undefined,
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
          name      = 'EliminarClienteScreen'
          component = {EliminarClienteScreen}
          options   = {{title: 'Eliminar Cliente', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'ListaClientesScreen'
          component = {ListaClientesScreen}
          options   = {{title: 'Clientes Registrados', headerShown: true}}
        />
        
        <Stack.Screen 
          name      = 'NuevoAgenteScreen'
          component = {NuevoAgenteScreen}
          options   = {{title: 'Nuevo Agente', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'EditarAgenteScreen'
          component = {EditarAgenteScreen}
          options   = {{title: 'Editar Agente', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'EliminarAgenteScreen'
          component = {EliminarAgenteScreen}
          options   = {{title: 'Eliminar Agente', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'ListaAgentesScreen'
          component = {ListaAgentesScreen}
          options   = {{title: 'Agentes Registrados', headerShown: true}}
        />

        <Stack.Screen 
          name      = 'NuevaPolizaScreen'
          component = {NuevaPolizaScreen}
          options   = {{title: 'Nueva Poliza', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'EditarPolizaScreen'
          component = {EditarPolizaScreen}
          options   = {{title: 'Editar Poliza', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'EliminarPolizaScreen'
          component = {EliminarPolizaScreen}
          options   = {{title: 'Eliminar Poliza', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'ListaPolizasScreen'
          component = {ListaPolizasScreen}
          options   = {{title: 'Polizas Registrados', headerShown: true}}
        />
        
        <Stack.Screen 
          name      = 'NuevoReclamoScreen'
          component = {NuevoReclamoScreen}
          options   = {{title: 'Nuevo Reclamo', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'EditarReclamoScreen'
          component = {EditarReclamoScreen}
          options   = {{title: 'Editar Reclamo', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'EliminarReclamoScreen'
          component = {EliminarReclamoScreen}
          options   = {{title: 'Eliminar Reclamo', headerShown: true}}
        />
        <Stack.Screen 
          name      = 'ListaReclamosScreen'
          component = {ListaReclamosScreen}
          options   = {{title: 'Reclamos Registrados', headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;