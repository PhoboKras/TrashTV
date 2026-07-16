import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {

    alert('Bem-vindo(a)!');

  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎬TrashTv</Text>
      <Text style={styles.subtitulo}>Entre para assistir seus filmes favoritos</Text>
      </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
