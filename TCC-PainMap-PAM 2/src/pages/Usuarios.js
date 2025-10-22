import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import { supabase } from '../services/supabase';

export default function Usuarios() {
    const navigation = useNavigation();

    const [usuarios, setUsuarios] = useState([]);
    const [page, setPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState(''); 
    const [totalUsuarios, setTotalUsuarios] = useState(0);
    const [contador, setContador] = useState(0);
    const limit = 6;

    const fetchUsuarios = async () => {
        let query = supabase
            .from('profiles')
            .select('*', { count: 'exact' })
            .neq('is_admin', true); 

        if (statusFilter) query = query.eq('status', statusFilter);

        const { data, count, error } = await query.range((page - 1) * limit, page * limit - 1);
        if (!error) {
            setUsuarios(data);
            setTotalUsuarios(count || 0);
        }

        let countQuery = supabase
            .from('profiles')
            .select('*', { count: 'exact', head: true })
            .neq('is_admin', true);
        if (statusFilter) countQuery = countQuery.eq('status', statusFilter);
        const { count: totalCount } = await countQuery;
        setContador(totalCount || 0);
    };

    useEffect(() => {
        fetchUsuarios();
    }, [page, statusFilter]);

    const totalPages = Math.ceil(totalUsuarios / limit);

    const statusOptions = ['', 'Sintomático', 'Assintomático'];

    return (
        <View style={styles.container}>
            <Header />

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={32} color="#fff" />
            </TouchableOpacity>

            <View style={styles.filterContainer}>
                {statusOptions.map((status) => (
                    <TouchableOpacity
                        key={status}
                        style={[
                            styles.filterButton,
                            statusFilter === status && styles.filterButtonActive
                        ]}
                        onPress={() => {
                            setPage(1);
                            setStatusFilter(status);
                        }}
                    >
                        <Text style={[
                            styles.filterText,
                            statusFilter === status && styles.filterTextActive
                        ]}>
                            {status || 'Todos'}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            
            <Text style={styles.contador}>
                {statusFilter ? `Usuários com status "${statusFilter}": ${contador}`
                    : `Total de usuários: ${contador}`}
            </Text>

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.user_id}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.userStatus}>{item.status}</Text>
                    </View>
                )}
            />

            {totalUsuarios > 0 && (
                <View style={styles.pagination}>
                    <TouchableOpacity
                        disabled={page === 1}
                        onPress={() => setPage(page - 1)}
                    >
                        <Text style={[styles.pageBtn, page === 1 && styles.disabled]}>Anterior</Text>
                    </TouchableOpacity>

                    <Text style={styles.pageNumber}>
                        {page} / {totalPages}
                    </Text>

                    <TouchableOpacity
                        disabled={page === totalPages || totalPages === 0}
                        onPress={() => setPage(page + 1)}
                    >
                        <Text style={[styles.pageBtn, page === totalPages && styles.disabled]}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#246296', paddingBottom: 20 },
    filterContainer: { flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10, marginBottom: '6%', marginTop: '5%' },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#2871AE',
        borderWidth: 2,
        borderColor: '#fff',
    },
    filterButtonActive: { backgroundColor: '#007AFF' },
    filterText: { color: '#fff', fontWeight: 'bold' },
    filterTextActive: { color: '#fff' },
    contador: { color: '#fff', fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginBottom: 5, alignSelf: 'center' },
    userItem: { padding: 10, borderBottomWidth: 1, borderColor: '#fff' },
    userName: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    userStatus: { color: '#ccc', fontSize: 14 },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: '3%',
    },
    pageBtn: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
    pageNumber: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
    disabled: { color: '#888' },
    backButton: {
        padding: "3%",
    }
});
