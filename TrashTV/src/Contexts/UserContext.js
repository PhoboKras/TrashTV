import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

const STORAGE_KEY = '@trashtv:user';

export function UserProvider({ children }) {
  const [user, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ao abrir o app, tenta carregar o usuário salvo
  useEffect(() => {
    async function loadUser() {
      try {
        const storedUser = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedUser) {
          setUserState(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log('Erro ao carregar usuário:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  // Salva o usuário no AsyncStorage sempre que fizer login
  async function setUser(userData) {
    try {
      setUserState(userData);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch (error) {
      console.log('Erro ao salvar usuário:', error);
    }
  }

  // Função extra pra fazer logout (remove do storage também)
  async function logout() {
    try {
      setUserState(null);
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.log('Erro ao deslogar:', error);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}