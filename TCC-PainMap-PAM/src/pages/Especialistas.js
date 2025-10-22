import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Header from '../components/Header';
import { supabase } from '../services/supabase';

export default function Especialistas() {
  const navigation = useNavigation();
  const [profissionais, setProfissionais] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProfissionais, setTotalProfissionais] = useState(0);
  const [search, setSearch] = useState('');
  const limit = 4;

  const fetchProfissionais = async () => {
    let query = supabase
      .from('profissionais')
      .select('*', { count: 'exact' })
      .order('id', { ascending: true });

    if (search) {
      query = query.or(`cidade.ilike.%${search}%,estado.ilike.%${search}%`);
    }

    const { data, count, error } = await query.range((page - 1) * limit, page * limit - 1);

    if (!error) {
      setProfissionais(data);
      setTotalProfissionais(count || 0);
    } else {
      console.error('Erro ao buscar profissionais:', error);
    }
  };

  useEffect(() => {
    fetchProfissionais();
  }, [page, search]);

  const totalPages = Math.ceil(totalProfissionais / limit);

  return (
    <View style={styles.container}>
      <Header />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Profissionais disponíveis</Text>
      <Text style={styles.subtitle}>Pesquisar por cidade ou estado</Text>

      <TextInput
        placeholder="Digite cidade ou estado"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={search}
        onChangeText={(text) => {
          setPage(1);
          setSearch(text);
        }}
      />

      <Text style={styles.subtitle2}>
        {search
          ? `Resultados para "${search}": ${totalProfissionais}`
          : `Total de profissionais: ${totalProfissionais}`}
      </Text>

      <View contentContainerStyle={{ paddingBottom: 120 }}>
        {profissionais.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { id: p.id })}
          >
            <Image source={{ uri: p.foto }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.nome} numberOfLines={2} ellipsizeMode="tail">
                {p.nome}
              </Text>
              <Text style={styles.cidade}>
                {p.cidade} - {p.estado}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.pagination}>
        <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)}>
          <Text style={[styles.pageBtn, page === 1 && styles.disabled]}>Anterior</Text>
        </TouchableOpacity>

        <Text style={styles.pageNumber}>
          {page} / {totalPages}
        </Text>

        <TouchableOpacity disabled={page === totalPages} onPress={() => setPage(page + 1)}>
          <Text style={[styles.pageBtn, page === totalPages && styles.disabled]}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#246296',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '5%',
  },
  subtitle2: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#2871AE',
    color: '#fff',
    marginHorizontal: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: '5%',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#2871AE',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  cidade: {
    color: '#fff',
    fontSize: 14,
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: 'rgba(36, 98, 150, 0.9)',
    padding: 10,
    borderRadius: 8,
    zIndex: 2,
  },
  pageBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pageNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabled: {
    color: '#888',
  },
  backButton: {
    padding: '3%',
  },
});
