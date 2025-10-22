import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import { Ionicons } from '@expo/vector-icons';
import vianaimg from '../../assets/vianaimg.png'
import pijasimg from '../../assets/pijasimg.png'
import carolimg from '../../assets/carolimg.png'

export default function Info({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Header />

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={32} color="#fff" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Informações do projeto.</Text>
                <Text style={styles.subtitle}>Entenda um pouco sobre o projeto e suas motivações.</Text>

                <Text style={styles.title2}>Lembrete!</Text>
                <Text style={styles.text}>
                    Este aplicativo foi desenvolvido para rastrear se você sente dor devido à Disfunção Temporomandibular (DTM), ou seja, se você apresenta sintomas de DTM. {"\n"}
                    {"\n"}
                    Você pode apresentar sintomas e não ter DTM. Entretanto, é importante que você saiba o que é DTM, seus principais sintomas e saber que o dentista especialista em Disfunção Temporomandibular e Dor Orofacial você deve procurar para fazer uma avaliação, visto que as informações do app não substituem uma avaliação profissional. {"\n"}
                    {"\n"}
                    Além disso, as informações registradas são confidenciais e usadas apenas para seu acompanhamento pessoal.
                </Text>

                <Text style={styles.title2}>O que é o PainMap?</Text>
                <Text style={styles.text}>
                    O PainMap é um projeto da turma do 3° ano do curso Técnico em Desenvolvimento de Sistemas da ETEC Bento Quirino (2025),
                    focado na Disfunção Temporomandibular (DTM). O objetivo é oferecer informações confiáveis sobre a DTM,
                    conscientizar a população sobre sintomas e fatores de risco, e incentivar a busca por acompanhamento profissional. {"\n"}
                    {"\n"}
                    Dessa forma, o projeto integra três recursos: {"\n"}
                    {"\n"}
                    • Site informativo: conteúdos detalhados sobre DTM e contatos de especialistas. {"\n"}
                    {"\n"}
                    • Aplicativo mobile: versão resumida das informações, com formulário de autotriagem que indica a possibilidade de sinais de DTM. {"\n"}
                    {"\n"}
                    • Modelo físico interativo: crânio 3D com LEDs e botões mostrando pontos anatômicos relacionados à DTM, para aprendizado prático.
                </Text>

                <Text style={styles.title2}>Por que escolhemos esse tema?</Text>
                <Text style={styles.text}>
                    O interesse pelo tema surgiu naturalmente, pois dois integrantes do grupo tinham interesse profissional pela área de odontologia, e a mãe de uma integrante é especialista em DTM e Dor Orofacial, o que auxiliou bastante no desenvolvimento do projeto. {"\n"}
                    {"\n"}
                    Além disso, percebemos que a DTM é muito comum, mas pouco conhecida pela população em geral. Muitas pessoas convivem com dores relacionadas à DTM sem saber sua causa ou como tratar. {"\n"}
                    {"\n"}
                    Por isso, vimos a oportunidade de unir nossos interesses em tecnologia e saúde, criando um projeto que realmente possa ajudar as pessoas a entenderem melhor a condição, reconhecerem os sintomas e buscarem o tratamento adequado. {"\n"}
                </Text>

                <Text style={styles.title2}>Objetivos do projeto</Text>
                <Text style={styles.text}>
                    • Conscientizar a população, especialmente adolescentes, sobre sintomas e terapias conservadoras da DTM. {"\n"}
                    {"\n"}
                    • Demonstrar, por meio do modelo físico, o conceito de dor referida. {"\n"}
                    {"\n"}
                    • Desenvolver um app com 4 perguntas de rastreamento de dor, indicando ao usuário quando buscar mais informações ou ajuda profissional. {"\n"}
                </Text>

                <Text style={styles.title2}>Justificativa</Text>
                <Text style={styles.text}>
                    Os casos de DTM aumentaram durante a pandemia, especialmente entre jovens, devido à ansiedade, depressão e efeitos de medicamentos que podem aumentar o apertamento dentário.
                    Dessa forma, pesquisar sintomas em adolescentes permite orientar e prevenir problemas relacionados à DTM. E criar um site e app acessíveis amplia o alcance dessas informações, já que o questionário de triagem normalmente é usado apenas por especialistas. {"\n"}
                </Text>

                <Text style={styles.title2}>Diferencial do projeto</Text>
                <Text style={styles.text}>
                    Apesar de frequente, a DTM é pouco conhecida, até entre profissionais de saúde. O PainMap ajuda a tornar informações sobre sintomas e terapias acessíveis,
                    contribuindo para prevenção e tratamento adequados, principalmente após o aumento de casos pós-pandemia. {"\n"}
                </Text>

                <Text style={styles.title3}>Nossos integrantes</Text>
                <Text style={styles.title4}>Vinícius Viana Alves</Text>
                <Text style={styles.title5}>Designer e Programador</Text>
                <View>
                    <Image
                        source={vianaimg}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.title4}>Pedro Henrique Stevanatto</Text>
                <Text style={styles.title5}>Desenvolvedor Sist. Embarcados</Text>
                <View>
                    <Image
                        source={pijasimg}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.title4}>Caroline Rocha Rodrigues</Text>
                <Text style={styles.title5}>Idealizadora</Text>
                <View>
                    <Image
                        source={carolimg}
                        style={styles.icon}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#246296",
    },
    content: {
        flex: 1,
        padding: 20,
        paddingBotom: "5%"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginTop: '2%',
        marginBottom: '2%',
    },
    title2: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginTop: '2%',
        marginBottom: '2%',
    },
    title3: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginTop: '2%',
        marginBottom: '8%',
    },
    title4: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginTop: '4%'
    },
    title5: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: '5%'
    },
    text: {
        fontSize: 14,
        color: "#fff",
        textAlign: 'justify',
        marginTop: '2%',
        marginBottom: '8%',
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 30
    },
    item: {
        width: "40%",
        alignItems: "center",
        margin: '2%',
    },
    icon: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: '8%',
        borderWidth: 3,
        borderColor: '#fff',
    },
    backButton: {
        padding: "3%"
    }
});
