import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function DtmSintomas({ navigation }) {
    const scrollRef = useRef(null);
    
      useFocusEffect(
        React.useCallback(() => {
          scrollRef.current?.scrollTo({ y: 0, animated: false });
        }, [])
      );

    return (
        <ScrollView style={styles.container} ref={scrollRef}>
            <Header />

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={32} color="#fff" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>O que é DTM?</Text>
                <Text style={styles.subtitle}>Descubra aqui o que é DTM e os {"\n"} problemas associados a ela.</Text>

                <Text style={styles.title2}>O que é DTM?</Text>
                <Text style={styles.text}>
                    A Disfunção Temporomandibular (DTM) é uma condição que afeta a articulação da mandíbula, os músculos da mastigação e estruturas próximas. {"\n"}
                    Pode causar dor, estalos, travamentos e dificuldade para abrir ou fechar a boca. {"\n"}
                </Text>

                <Text style={styles.title2}>Quem pode ter DTM?</Text>
                <Text style={styles.text}>
                    A DTM é comum, sendo a segunda condição musculoesquelética mais frequente, atrás apenas das dores lombares. {"\n"}
                    Afeta principalmente mulheres jovens, mas também pode ocorrer em homens, adolescentes e até crianças. {"\n"}
                </Text>

                <Text style={styles.title2}>Tipos de DTM</Text>
                <Text style={styles.text}>
                    A DTM pode ser muscular, articular ou ambas. {"\n"}
                    {"\n"}
                    • Músculos – causando dor e tensão na face, cabeça e pescoço. {"\n"}
                    {"\n"}
                    • Articulação – provocando estalos, travamentos ou deslocamento do disco. {"\n"}
                    {"\n"}
                    Muitas pessoas apresentam mais de um tipo ao mesmo tempo. {"\n"}
                </Text>

                <Text style={styles.title2}>Sintomas mais comuns</Text>
                <Text style={styles.text}>
                    • Dor na mandíbula, face, têmporas ou pescoço {"\n"}
                    {"\n"}
                    • Estalos ou travamentos ao abrir a boca {"\n"}
                    {"\n"}
                    • Dificuldade para mastigar ou falar {"\n"}
                    {"\n"}
                    • Dores de cabeça frequentes {"\n"}
                    {"\n"}
                    • Sensação de ouvido tampado, zumbido ou dor de ouvido {"\n"}
                    {"\n"}
                    Esses sintomas podem aparecer juntos ou separados e fazem parte de um subtipo de DTM: a dor miofascial com referência de dor. {"\n"}
                    {"\n"}
                    O ponto gatilho é uma banda tensa no músculo e o local que origina a dor na cabeça, assim como no ouvido, dentes ou pescoço, que são áreas de referência de dor. {"\n"}
                </Text>

                <Text style={styles.title2}>Causas e fatores associados</Text>
                <Text style={styles.text}>
                    A DTM tem várias causas possíveis: {"\n"}
                    {"\n"}
                    • Estresse, ansiedade e tensão muscular {"\n"}
                    {"\n"}
                    • Apertar ou ranger os dentes (bruxismo) {"\n"}
                    {"\n"}
                    • Traumas na face ou mandíbula {"\n"}
                    {"\n"}
                    • Hábitos como roer unhas ou apoiar o queixo {"\n"}
                    {"\n"}
                    • Problemas articulares, doenças sistêmicas ou fatores genéticos {"\n"}
                    {"\n"}
                    • Uso de antidepressivos inibidores da receptação da serotonina pode aumentar o bruxismo de vigília, e consequentemente desenvolver DTM {"\n"}
                    {"\n"}
                    O estresse é um dos principais agravantes. {"\n"}
                </Text>

                <Text style={styles.title2}>Diagnóstico</Text>
                <Text style={styles.text}>
                    O diagnóstico é realizado por um cirurgião-dentista especializado em Disfunção Temporomandibular e Dor Orofacial, por meio de história detalhada dos sintomas e exame dos músculos e articulações. {"\n"}
                </Text>

                <Text style={styles.title2}>Tratamento e controle</Text>
                <Text style={styles.text}>
                    A maioria dos casos melhora com medidas simples: {"\n"}
                    {"\n"}
                    • Exercícios e alongamentos {"\n"}
                    {"\n"}
                    • Compressas mornas {"\n"}
                    {"\n"}
                    • Ter consciência de hábitos prejudiciais ao sistema da mastigação {"\n"}
                    {"\n"}
                    • Técnicas de relaxamento e controle do estresse {"\n"}
                    {"\n"}
                    • Fisioterapia e apoio psicológico, quando necessário {"\n"}
                    {"\n"}
                    • Cirurgias são raras e indicadas apenas em casos específicos {"\n"}
                </Text>

                <Text style={styles.title2}>A dor vai além da articulação</Text>
                <Text style={styles.text}>
                    A dor da DTM pode estar ligada não só à boca e aos músculos, mas também às emoções e ao estilo de vida. {"\n"}
                    A dor orofacial é complexa e envolve corpo e mente. {"\n"}
                </Text>

                <Text style={styles.title2}>O que é avaliação psicossomática?</Text>
                <Text style={styles.text}>
                    É uma forma de olhar para o paciente de modo integral — entendendo que fatores emocionais, como ansiedade, estresse, tristeza ou trauma, podem influenciar diretamente a dor. {"\n"}
                </Text>

                <Text style={styles.title2}>Um olhar completo sobre a dor</Text>
                <Text style={styles.text}>
                    O modelo biopsicossocial reconhece que a dor não é apenas física. {"\n"}
                    Aspectos psicológicos e sociais, como rotina estressante, ambiente de trabalho e relações pessoais, podem aumentar a tensão muscular e até causar bruxismo ou apertamento dental. {"\n"}
                </Text>

                <Text style={styles.title2}>Por que isso importa?</Text>
                <Text style={styles.text}>
                    Compreender a dor de forma ampla ajuda o profissional a indicar o tratamento mais adequado — cuidando do corpo, da mente e da qualidade de vida. {"\n"}
                </Text>

                <Text style={styles.title2}>Dicas de autocuidado</Text>
                <Text style={styles.text}>
                    • Evite apertar os dentes — mantenha os lábios fechados, mas os dentes separados {"\n"}
                    {"\n"}
                    • Faça pausas ao longo do dia para relaxar o rosto e o pescoço {"\n"}
                    {"\n"}
                    • Prefira alimentos mais macios nos períodos de dor {"\n"}
                    {"\n"}
                    • Durma em posição confortável, evitando apoiar o rosto na mão {"\n"}
                    {"\n"}
                    • Pratique respiração profunda e alongamentos leves {"\n"}
                </Text>

                <Text style={styles.title2}>Quando procurar ajuda profissional</Text>
                <Text style={styles.text}>
                    Se a dor for frequente, limitar a abertura da boca ou causar desconforto para mastigar e falar, procure um cirurgião-dentista especializado em Disfunção Temporomandibular e Dor Orofacial. {"\n"}
                    {"\n"}
                    O tratamento adequado ajuda a controlar os sintomas e melhora a qualidade de vida. {"\n"}
                </Text>

                <Text style={styles.title2}>Importante saber</Text>
                <Text style={styles.text}>
                    A DTM tem tratamento e com orientação adequada de hábitos saudáveis, é possível controlar a dor e recuperar o bem-estar. {"\n"}
                </Text>

                <Text style={styles.title2}>🔔 Lembrete de relaxamento</Text>
                <Text style={styles.text}>
                    Pare um minutinho: descruze os braços, solte os ombros, mantenha os dentes afastados e respire fundo. {"\n"}
                    {"\n"}
                    Pequenas pausas ajudam a aliviar a tensão da mandíbula. {"\n"}
                </Text>

                <Text style={styles.title2}>Conteúdos educativos</Text>
                <Text style={styles.text}>
                    Para maiores informações baseadas em evidências, acesse o site PainMap. {"\n"}
                </Text>

                <Text style={styles.title2}>Informação é parte do tratamento</Text>
                <Text style={styles.text}>
                    Entender o que é DTM ajuda a reconhecer os sintomas e buscar ajuda profissional mais cedo. {"\n"}
                    Com cuidado e orientação, é possível controlar a dor e recuperar a qualidade de vida. {"\n"}
                </Text>

                <Text style={styles.title2}>Nosso objetivo</Text>
                <Text style={styles.text}>
                    Este aplicativo foi criado para ajudar você a identificar sintomas de DTM, acompanhar sua evolução e encontrar orientações confiáveis de forma simples e segura. {"\n"}
                </Text>



                <Text style={styles.title2}>Acha que pode possuir DTM? Veja nosso conteúdo de educação sobre a DTM ou procure um profissional.</Text>
                <Text style={styles.text}>
                    Reconhecer e saber lidar com os sintomas de DTM é importante para prevenir complicações. Por isso separamos um conteúdo de educação sobre DTTM, mas lembramos a avaliação de um especialista é
                    recomendada para um diagnóstico e tratamento adequados.
                </Text>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dicas")}>
                        <Text style={styles.buttonText}>Educação sobre a {"\n"} DTM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Especialistas")}>
                        <Text style={styles.buttonText}>Profissionais disponíveis</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#246296",
        paddingBottom: '10%'
    },
    content: {
        flex: 1,
        padding: 20,
        paddingTop: "5%"
    },
    viewb: {
        backgroundColor: 'fff'
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
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginTop: '2%',
        marginBottom: '3%',
    },
    title3: {
        fontSize: 16,
        color: "#fff",
        marginBottom: '3%',
    },
    text: {
        fontSize: 15,
        color: "#fff",
        textAlign: 'justify',
        marginTop: '2%',
        marginBottom: '8%',
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 40
    },
    item: {
        width: "40%",
        alignItems: "center",
        margin: '2%',
    },
    icon: {
        width: '60%',
        height: '60%',
        tintColor: "#fff",
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 15,
        marginBottom: '15%'
    },
    button: {
        backgroundColor: '#2871AE',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 15,
        alignSelf: "center",
        width: 150,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "10%"
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backButton: {
        padding: "3%"
    }
});
