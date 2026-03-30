import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthContext, useAuthState } from './src/hooks/useAuth';

export default function App() {
  const authState = useAuthState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContext.Provider value={authState}>
        <AppNavigator />
      </AuthContext.Provider>
    </GestureHandlerRootView>
  );
}