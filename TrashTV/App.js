import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/routes/StackNavigation';
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
    return (
        <UserProvider>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </UserProvider>
    );
}