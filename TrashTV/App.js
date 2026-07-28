import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/Routes/StackRoutes';
import { UserProvider } from './src/Contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});