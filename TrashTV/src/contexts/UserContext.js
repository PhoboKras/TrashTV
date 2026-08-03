import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../storage/StorageKeys";

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    async function loadUser() {

        try {
            const storedUser = await AsyncStorage.getItem(STORAGE_KEYS.USER);
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.log("Erro ao carregar usuário:", error);
        } finally {
            setLoading(false);
        }
    }
    async function login(userData) {

        try {
            setUser(userData);
            await AsyncStorage.setItem(
                STORAGE_KEYS.USER,
                JSON.stringify(userData)
            );
        } catch (error) {
            console.log("Erro ao salvar usuário:", error);
        }
    }
    async function logout() {

        try {
            setUser(null);
            await AsyncStorage.removeItem(STORAGE_KEYS.USER);
        } catch (error) {
            console.log("Erro ao remover usuário:", error);
        }
    }

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                loading
            }}
        >
            {children}
        </UserContext.Provider>
    );
}