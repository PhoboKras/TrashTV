import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../pages/home/Home";
import Filmes from "../pages/Filmes/Filmes";
import Assinaturas from "../pages/Assinaturas/Assinaturas";
import Perfil from "../pages/Perfil/Perfil";
import FaleConosco from "../pages/FaleConosco/FaleConosco";
import Desenvolvedores from '../pages/Desenvolvedores/Desenvolvedores'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E50914",
                tabBarInactiveTintColor: "#999",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Filmes"
                component={Filmes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="film" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Assinaturas"
                component={Assinaturas}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-bag" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Fale Conosco"
                component={FaleConosco}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="phone" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Desenvolvedores"
                component={Desenvolvedores}
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Feather name="code" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>  
    );
}