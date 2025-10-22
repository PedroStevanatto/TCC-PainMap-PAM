import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import Constants from 'expo-constants';
import logo from '../../assets/painmaplogo.png';

const { width } = Dimensions.get('window');

export default function Header() {
    const navigation = useNavigation();
    const { profile, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const slideAnim = useState(new Animated.Value(-width))[0];

    const toggleMenu = () => {
        if (menuOpen) {
            Animated.timing(slideAnim, {
                toValue: -width,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setMenuOpen(false));
        } else {
            setMenuOpen(true);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleLogout = async () => {
        await logout();
    };

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Text style={styles.menuButton}>☰</Text>
                </TouchableOpacity>

                <Image source={logo} style={styles.logo} resizeMode="contain" />

                {profile?.avatar_url ? (
                    <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
                ) : (
                    <View style={styles.avatarPlaceholder} />
                )}
            </View>

            {menuOpen && (
                <>
                    <TouchableOpacity
                        style={styles.overlay}
                        onPress={toggleMenu}
                        activeOpacity={1}
                    />

                    <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
                        {profile && (
                            <View style={styles.userInfo}>
                                {profile.avatar_url ? (
                                    <Image source={{ uri: profile.avatar_url }} style={styles.menuAvatar} />
                                ) : (
                                    <View style={styles.menuAvatarPlaceholder} />
                                )}
                                <Text style={styles.menuName}>{profile.name}</Text>
                                <Text style={styles.menuStatus}>
                                    {profile.status || 'Indefinido'}
                                </Text>
                            </View>
                        )}

                        {/* Menu */}
                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Home'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Página Inicial</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('FormPage'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Questionário de Triagem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('DtmSintomas'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Dtm e sintomas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Dicas'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Educação sobre a DTM</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Recomendacoes'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Recomendações</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Especialistas'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Procure um especialista</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Info'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Informações do projeto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Settings'); toggleMenu(); }}>
                            <Text style={styles.menuText}>Configurações</Text>
                        </TouchableOpacity>

                        {profile?.is_admin && (
                            <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Usuarios'); toggleMenu(); }}>
                                <Text style={styles.menuText}>Usuários</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity style={styles.menuLogout} onPress={handleLogout}>
                            <Text style={styles.menuLogoutText}>Sair</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80 + Constants.statusBarHeight,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#2871AE',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        zIndex: 10
    },

    menuButton: {
        fontSize: 28,
        color: '#fff'
    },

    logo: {
        width: "50%",
        height: "60%"
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },

    avatarPlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#ccc'
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 9
    },

    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width * 0.7,
        height: '100%',
        backgroundColor: '#246296',
        paddingTop: 60,
        paddingHorizontal: 20,
        zIndex: 10
    },

    userInfo: {
        alignItems: 'center',
        marginBottom: 30
    },

    menuAvatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10
    },

    menuAvatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ccc',
        marginBottom: 10
    },

    menuName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

    menuText: {
        fontSize: 16,
        color: 'white'
    },

    menuItem: {
        paddingVertical: 15
    },

    menuLogout: {
        marginTop: '10%',
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center'
    },

    menuLogoutText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },

    menuStatus: {
        fontSize: 14,
        color: '#fff',
        marginTop: 2
    },

});
