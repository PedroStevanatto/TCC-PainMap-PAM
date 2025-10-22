import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import { supabase } from '../services/supabase';

export default function Detalhes() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [profissional, setProfissional] = useState(null);

    useEffect(() => {
        const fetchProfissional = async () => {
            const { data, error } = await supabase
                .from('profissionais')
                .select('id, nome, cidade, estado, telefone, endereco, conselho, email, foto')
                .eq('id', id)
                .single();
            if (!error) setProfissional(data);
            else console.error('Erro ao buscar profissional:', error);
        };
        fetchProfissional();
    }, [id]);

    if (!profissional) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Header />
                <Text style={{ color: '#fff', fontSize: 18 }}>Carregando...</Text>
            </View>
        );
    }

    const telefones = profissional.telefone
        ? profissional.telefone.split(';').map(t => t.trim()).filter(Boolean)
        : [];
    const enderecos = profissional.endereco
        ? profissional.endereco.split(';').map(e => e.trim()).filter(Boolean)
        : [];

    return (
        <ScrollView style={styles.container}>
            <Header />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={32} color="#fff" />
            </TouchableOpacity>

            <View style={styles.card}>
                <Image source={{ uri: profissional.foto }} style={styles.foto} />
                <Text style={styles.nome}>{profissional.nome}</Text>

                <Text style={styles.info}><Text style={styles.bold}>Cidade/Estado:</Text> {profissional.cidade} - {profissional.estado}</Text>
                <Text style={styles.info}><Text style={styles.bold}>Conselho:</Text> {profissional.conselho}</Text>
                <Text style={styles.info}><Text style={styles.bold}>Email:</Text> {profissional.email}</Text>

                <Text style={[styles.info, styles.bold]}>Telefone(s):</Text>
                {telefones.length > 0
                    ? telefones.map((t, i) => (
                        <Text key={i} style={styles.info}>{t}</Text>
                    ))
                    : <Text style={styles.info}>Não informado</Text>}

                <Text style={[styles.info, styles.bold, { marginTop: 10 }]}>Endereço(s):</Text>
                {enderecos.length > 0
                    ? enderecos.map((e, i) => (
                        <Text key={i} style={styles.info}>{e}</Text>
                    ))
                    : <Text style={styles.info}>Não informado</Text>}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#246296', paddingBottom: 20 },
    card: {
        margin: 15,
        backgroundColor: '#2871AE',
        borderRadius: 8,
        padding: 15,
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 999,
        marginBottom: 10,
        alignSelf: 'center'
    },
    nome: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: '8%',
        alignSelf: 'center'
    },
    info: { color: '#fff', fontSize: 18, marginBottom: "3%" },
    bold: { fontWeight: 'bold' },
    backButton: { padding: '3%' }
});
