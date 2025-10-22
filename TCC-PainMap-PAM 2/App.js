import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Settings from './src/pages/Settings';
import ChangePassword from './src/pages/ChangePassword';
import FormPage from './src/pages/FormPage';
import Recomendacoes from './src/pages/Recomendacoes';
import Usuarios from './src/pages/Usuarios';
import DtmSintomas from './src/pages/DtmSintomas';
import Dicas from './src/pages/Dicas';
import Info from './src/pages/Info';
import Especialistas from './src/pages/Especialistas'
import Detalhes from './src/pages/Detalhes';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#246296' }}>
      <Text style={{ fontSize: 18, color: "white" }}>Carregando...</Text>
    </View>
  );
}

function AppRoutes() {
  const { user, profile } = useAuth();

  if (user && profile === null) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FormPage" component={FormPage} />
          <Stack.Screen name="Recomendacoes" component={Recomendacoes} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="DtmSintomas" component={DtmSintomas} />
          <Stack.Screen name="Dicas" component={Dicas } />
          <Stack.Screen name="Info" component={Info } />
          <Stack.Screen name="Especialistas" component={Especialistas } />
          <Stack.Screen name="Detalhes" component={Detalhes } />
          {profile?.is_admin && (
            <Stack.Screen name="Usuarios" component={Usuarios} />
          )}
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AuthProvider>
  );
}
