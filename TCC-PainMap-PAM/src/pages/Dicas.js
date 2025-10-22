
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useRef } from 'react';

export default function Dicas({ navigation }) {
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
                <Text style={styles.title}>Educação sobre a DTM.</Text>
                <Text style={styles.subtitle}>Veja aqui o nosso material de educação sobre DTM.</Text>

                <Text style={styles.title1}>DTM e dor de cabeça: uma relação mais próxima do que parece</Text>
                <Text style={styles.text2}>
                    A Disfunção Temporomandibular (DTM) afeta a articulação temporomandibular (ATM) e os músculos da mastigação, causando dor crônica na face, cabeça e pescoço. {"\n"}
                </Text>

                <Text style={styles.title3}>Principais pontos</Text>
                <Text style={styles.text2}>
                    • A ATM conecta a mandíbula ao crânio. {"\n"}
                    {"\n"}
                    • Mais comum em mulheres entre 20 e 50 anos. {"\n"}
                    {"\n"}
                    • Sintomas frequentes: {"\n"}
                    {"\n"}
                    • Dor na face, mandíbula ou têmporas. {"\n"}
                    {"\n"}
                    • Estalos ou ruídos ao abrir a boca. {"\n"}
                    {"\n"}
                    • Dificuldade para mastigar ou falar. {"\n"}
                    {"\n"}
                    • Dor de cabeça frequente, muitas vezes confundida com enxaqueca ou cefaleia tensional. {"\n"}
                    {"\n"}
                    Essa condição evidencia como a DTM pode impactar a qualidade de vida e ser confundida com outros tipos de dor de cabeça. {"\n"}
                </Text>

                <Text style={styles.title2}>Quando a dor de cabeça vem da presença de pontos gatilho nos músculos da mastigação</Text>
                <Text style={styles.text2}>
                    • Pode estar relacionada a tensão, bruxismo (apertamento dos dentes) ou ainda, uma sobrecarga nos músculos da mastigação. {"\n"}
                    {"\n"}
                    • Chamadas de cefaleias secundárias, surgem como consequência de outra condição — neste caso, a DTM. {"\n"}
                    {"\n"}
                    • Cefaleias primárias (como enxaqueca e cefaleia tensional) são independentes, sem outra causa associada. {"\n"}
                    {"\n"}
                    • Estudos mostram que pessoas com DTM apresentam mais dor de cabeça que a população geral: {"\n"}
                    {"\n"}
                    • 67% dos pacientes com DTM relatam dor de cabeça. {"\n"}
                    {"\n"}
                    • 46% entre quem não apresenta o distúrbio. {"\n"}
                    {"\n"}
                    Isso evidencia a forte ligação entre DTM e dores de cabeça. {"\n"}
                </Text>

                <Text style={styles.title2}>Tipos mais comuns de dor de cabeça</Text>
                <Text style={styles.text2}>
                    As dores de cabeça podem apresentar características diferentes, sendo importante identificar corretamente o tipo, especialmente em pacientes com DTM. {"\n"}
                </Text>
                <Text style={styles.title4}>Principais tipos:</Text>
                <Text style={styles.text2}>
                    {"\n"}
                    • Cefaleia tipo tensional: mais frequente {"\n"}
                    {"\n"}
                    - Sensação de aperto ou pressão nos dois lados da cabeça. {"\n"}
                    - Intensidade leve a moderada. {"\n"}
                    - Dura horas e geralmente não piora com atividade física. {"\n"}
                    {"\n"}
                    • Enxaqueca (migrânea): {"\n"}
                    {"\n"}
                    - Dor pulsátil, geralmente em um lado da cabeça. {"\n"}
                    - Duração de 4 a 72 horas. {"\n"}
                    - Pode vir acompanhada de náusea, sensibilidade à luz (fotofobia) e ao som (fonofobia). {"\n"}
                    {"\n"}
                    Pacientes com DTM podem apresentar dor mista, combinando dor muscular e cefaleia, exigindo atenção especial no diagnóstico. {"\n"}
                </Text>

                <Text style={styles.title2}>DTM, dor miofascial e cefaleia: uma combinação difícil</Text>
                <Text style={styles.text2}>
                    A dor de cabeça associada à dor miofascial tende a ser mais intensa, pois ambos os problemas podem se potencializar. {"\n"}
                    {"\n"}
                    • Dor miofascial: causada por pontos de tensão nos músculos. {"\n"}
                    • DTM e dor miofascial se agravam mutuamente. {"\n"}
                    {"\n"}
                    É essencial diferenciar a origem da dor: {"\n"}
                    {"\n"}
                    • Se vem do músculo, da articulação ou é uma cefaleia primária. {"\n"}
                    {"\n"}
                    Essa diferenciação ajuda a orientar o tratamento de forma adequada. {"\n"}
                </Text>

                <Text style={styles.title2}>Tratamento e cuidado integrados</Text>
                <Text style={styles.text2}>
                    O tratamento da DTM e das dores de cabeça devem ser individualizados e envolvem abordagens integradas para melhores resultados. {"\n"}
                    {"\n"}
                    Principais estratégias: {"\n"}
                    {"\n"}
                    • Terapias manuais e fisioterapia para relaxar a musculatura. {"\n"}
                    {"\n"}
                    • Controle do bruxismo e ajustes nos hábitos de mastigação. {"\n"}
                    {"\n"}
                    • Alongamentos e aplicação de calor local para aliviar a tensão. {"\n"}
                    {"\n"}
                    • Orientação sobre postura e autocuidado. {"\n"}
                    {"\n"}
                    • Tratamento médico em casos de dor de cabeça crônica. {"\n"}
                    {"\n"}
                    Quando DTM e cefaleia estão associadas, a colaboração entre dentista, fisioterapeuta e neurologista potencializa a eficácia do tratamento. {"\n"}
                </Text>

                <Text style={styles.title2}>Em resumo</Text>
                <Text style={styles.text}>
                    • DTM e dor de cabeça estão intimamente ligadas. {"\n"}
                    {"\n"}
                    • A tensão nos músculos da mastigação pode gerar ou agravar crises de dor de cabeça. {"\n"}
                    {"\n"}
                    • Diagnóstico correto é essencial para definir o tratamento adequado. {"\n"}
                    {"\n"}
                    • Abordagens combinadas — físicas, odontológicas e médicas — apresentam melhores resultados. {"\n"}
                    {"\n"}
                </Text>

                <Text style={styles.title1}>DTM x Dor Referida</Text>
                <Text style={styles.text2}>
                    A Síndrome da Dor Miofascial (SDM) é uma das causas mais comuns de dor muscular crônica e pode afetar várias regiões do corpo, incluindo face e mandíbula. {"\n"}
                </Text>

                <Text style={styles.title2}>Principais pontos</Text>
                <Text style={styles.text2}>
                    • Ocorre devido a pontos gatilho miofasciais (PGM) — pequenas áreas do músculo tensas e doloridas. {"\n"}
                    {"\n"}
                    • Os PGM podem causar dor local e dor referida, que é percebida em outras regiões do corpo. {"\n"}
                    {"\n"}
                    Essa relação ajuda a entender como a DTM pode gerar sintomas em áreas aparentemente distantes da articulação. {"\n"}
                </Text>

                <Text style={styles.title2}>O que é um ponto gatilho?</Text>
                <Text style={styles.text2}>
                    Um ponto gatilho é como um “nó” no músculo, sensível ao toque, que pode causar dor e desconforto em diferentes regiões do corpo. {"\n"}
                </Text>

                <Text style={styles.title2}>Principais pontos</Text>
                <Text style={styles.text2}>
                    • Pode gerar dor, sensação de peso, formigamento ou rigidez. {"\n"}
                    {"\n"}
                    • Quando pressionado, reproduz a dor do dia a dia: cabeça, face, mandíbula ou pescoço. {"\n"}
                </Text>

                <Text style={styles.title2}>Classificação dos pontos gatilho</Text>
                <Text style={styles.text2}>
                    • Ativo: provoca dor mesmo em repouso. {"\n"}
                    {"\n"}
                    • Latente: não causa dor espontânea, mas gera desconforto ao toque e pode limitar o movimento. {"\n"}
                    {"\n"}
                    Esses pontos são frequentemente associados à DTM e dor miofascial. {"\n"}
                </Text>

                <Text style={styles.title2}>Relação com a DTM</Text>
                <Text style={styles.text2}>
                    Os pontos gatilho são comuns nos músculos da mastigação, especialmente masseter e temporal, em pessoas com DTM. {"\n"}
                </Text>

                <Text style={styles.title2}>Principais consequências da presença de pontos gatilho</Text>
                <Text style={styles.text2}>
                    • Dor ao mastigar ou abrir a boca. {"\n"}
                    {"\n"}
                    • Dor na face, têmporas ou próximo ao ouvido. {"\n"}
                    {"\n"}
                    • Dores de cabeça tensionais. {"\n"}
                    {"\n"}
                    • Zumbido ou sensação de ouvido tampado. {"\n"}
                    {"\n"}
                    Esses sintomas ajudam a explicar a variedade de manifestações associadas à DTM. {"\n"}
                </Text>

                <Text style={styles.title2}>Por que os pontos gatilho aparecem?</Text>
                <Text style={styles.text2}>
                    A origem exata dos pontos gatilho ainda não é totalmente conhecida, mas alguns fatores aumentam o risco de seu surgimento. {"\n"}
                </Text>

                <Text style={styles.title2}>Fatores de risco</Text>
                <Text style={styles.text2}>
                    • Posturas incorretas e tensão muscular constante. {"\n"}
                    {"\n"}
                    • Bruxismo (ranger ou apertar os dentes). {"\n"}
                    {"\n"}
                    • Estresse emocional e ansiedade. {"\n"}
                    {"\n"}
                    Músculos contraídos por longos períodos têm fluxo sanguíneo e oxigênio reduzidos, dificultando o relaxamento das fibras, o que pode causar inflamação, acúmulo de toxinas e dor persistente. {"\n"}
                </Text>

                <Text style={styles.title2}>Diagnóstico</Text>
                <Text style={styles.text2}>
                    O diagnóstico da DTM e dos pontos gatilho é clínico e realizado por um profissional capacitado, geralmente por meio de tomada de história e palpação dos músculos. {"\n"}
                    {"\n"}
                    O especialista verifica: {"\n"}
                    {"\n"}
                    • Áreas tensas e doloridas. {"\n"}
                    {"\n"}
                    • Presença de resposta contrátil (pequeno espasmo muscular). {"\n"}
                    {"\n"}
                    • Dor irradiada durante o exame. {"\n"}
                    {"\n"}
                    Essa avaliação permite identificar a origem da dor e orientar o tratamento adequado. {"\n"}
                </Text>

                <Text style={styles.title2}>Tratamento</Text>
                <Text style={styles.text2}>
                    O tratamento da DTM e dos pontos gatilho deve ser individualizado e, muitas vezes, multidisciplinar. {"\n"}
                    {"\n"}
                    Principais abordagens: {"\n"}
                    {"\n"}
                    • Alongamentos e exercícios de relaxamento. {"\n"}
                    {"\n"}
                    • Terapias manuais, como digito-pressão e liberação miofascial. {"\n"}
                    {"\n"}
                    • Termoterapia (uso de calor local). {"\n"}
                    {"\n"}
                    • Terapia manual intramuscular, realizado por profissional habilitado. {"\n"}
                    {"\n"}
                    • Correção de hábitos e posturas que mantêm a dor. {"\n"}
                    {"\n"}
                    • Equilíbrio emocional, pois estresse e ansiedade podem manter a musculatura tensa; em alguns casos, é recomendado acompanhamento psicológico. {"\n"}
                    {"\n"}
                    Essas estratégias combinadas ajudam a aliviar a dor e prevenir recorrências. {"\n"}
                </Text>

                <Text style={styles.title2}>Importância do diagnóstico precoce</Text>
                <Text style={styles.text}>
                    Reconhecer e tratar a Síndrome da Dor Miofascial de forma precoce é fundamental para evitar que a dor se torne crônica e de difícil controle. {"\n"}
                    {"\n"}
                    Principais pontos: {"\n"}
                    {"\n"}
                    • Informação e autocuidado ajudam na prevenção e manejo da dor. {"\n"}
                    {"\n"}
                    • A busca por ajuda profissional é essencial para um tratamento eficaz. {"\n"}
                    {"\n"}
                    • Diagnóstico e intervenção precoces melhoram a qualidade de vida e aliviam os sintomas. {"\n"}
                </Text>

                <Text style={styles.title1}>DTM e fatores emocionais: quando o corpo fala através da dor</Text>
                <Text style={styles.text2}>
                    A DTM afeta a articulação temporomandibular (ATM), músculos e ligamentos envolvidos na mastigação e fala. {"\n"}
                </Text>

                <Text style={styles.title2}>Principais sintomas</Text>
                <Text style={styles.text2}>
                    • Dor na face. {"\n"}
                    {"\n"}
                    • Dificuldade para abrir a boca. {"\n"}
                    {"\n"}
                    • Estalos articulares. {"\n"}
                    {"\n"}
                    • Desconforto ao mastigar ou falar. {"\n"}
                </Text>

                <Text style={styles.title2}>O impacto do estresse e das emoções na DTM</Text>
                <Text style={styles.text2}>
                    Estresse, ansiedade e depressão podem aumentar a tensão nos músculos da face e do pescoço, sobrecarregando a articulação e causando dor. {"\n"}
                    {"\n"}
                    Principais pontos: {"\n"}
                    {"\n"}
                    • Períodos de tensão emocional podem levar ao bruxismo (apertar ou ranger os dentes), aumentando a contração dos músculos da mandíbula. {"\n"}
                    {"\n"}
                    • O bruxismo piora os sintomas da DTM e pode desencadear novas crises de dor. {"\n"}
                    {"\n"}
                    • Durante a pandemia, houve aumento de queixas de dor por DTM, devido à ansiedade, isolamento e incerteza, resultando em tensão muscular e dificuldade para mastigar. {"\n"}
                </Text>

                <Text style={styles.title2}>O cérebro e a percepção da dor</Text>
                <Text style={styles.text2}>
                    As emoções influenciam a forma como o cérebro interpreta a dor. {"\n"}
                    {"\n"}
                    Principais pontos: {"\n"}
                    {"\n"}
                    • O estresse constante mantém o sistema nervoso em “alerta”, aumentando a sensibilidade à dor. {"\n"}
                    {"\n"}
                    • O corpo pode reagir com dor a estímulos leves, tornando o desconforto mais persistente. {"\n"}
                    {"\n"}
                    • A DTM deve ser compreendida como uma condição que envolve corpo e mente, não apenas um problema físico. {"\n"}
                </Text>

                <Text style={styles.title2}>Um olhar integrado sobre o tratamento</Text>
                <Text style={styles.text}>
                    Emoções como ansiedade, tensão e estresse podem contribuir para o surgimento e agravamento da DTM. {"\n"}
                    {"\n"}
                    Principais pontos: {"\n"}
                    {"\n"}
                    • O bruxismo e a tensão muscular são formas pelas quais o corpo manifesta a sobrecarga emocional. {"\n"}
                    {"\n"}
                    • O tratamento deve ser integrado, envolvendo profissionais de odontologia, fisioterapia e psicologia. {"\n"}
                </Text>

                <Text style={styles.title1}>Antidepressivos, Bruxismo e Disfunção Temporomandibular (DTM)</Text>
                <Text style={styles.text2}>
                    Os antidepressivos são usados para tratar diversos problemas de saúde, incluindo: {"\n"}
                    {"\n"}
                    • Depressão: humor baixo, perda de prazer ou interesse em atividades por períodos prolongados. {"\n"}
                    {"\n"}
                    • Ansiedade: sensação constante de preocupação e tensão física. {"\n"}
                    {"\n"}
                    • Estresse: estado de tensão mental provocado por situações desafiadoras; quando excessivo, prejudica a saúde física e mental. {"\n"}
                    {"\n"}
                    • Transtornos obsessivo-compulsivos. {"\n"}
                    {"\n"}
                    • Dor de longa duração. {"\n"}
                    {"\n"}
                    • Transtornos alimentares. {"\n"}
                    {"\n"}
                    Esses fatores emocionais, assim como o uso de antidepressivos, podem gerar um aumento de bruxismo, ou seja, a atividade excessiva dos músculos da mastigação, que pode gerar desgaste dentário, dor e tensão muscular. {"\n"}
                </Text>

                <Text style={styles.title2}>Classificação do bruxismo</Text>
                <Text style={styles.text2}>
                    • Bruxismo do sono: ocorre durante o sono, podendo ser rítmico ou tônico. {"\n"}
                    {"\n"}
                    • Bruxismo em vigília: ocorre acordado, com apertos ou ranger dos dentes e movimentos involuntários da mandíbula; pode ocorrer mesmo em pessoas sem dentes. {"\n"}
                </Text>

                <Text style={styles.title2}>Principais pontos</Text>
                <Text style={styles.text}>
                    • Reconhecer os sintomas. {"\n"}
                    {"\n"}
                    • Procurar ajuda profissional antes que os sintomas se agravem. {"\n"}
                    {"\n"}
                    • Permite que os profissionais de saúde criem estratégias personalizadas, integrando cuidados médicos, odontológicos e psicológicos. {"\n"}
                    {"\n"}
                    • Pessoas que usam antidepressivos devem estar atentos à dor, desgaste dos dentes e desconforto na articulação temporomandibular. {"\n"}
                    {"\n"}
                    • Compartilhar essas informações ajuda a prevenir DTM e promover saúde bucal e mental. {"\n"}
                    {"\n"}
                </Text>

                <Text style={styles.title1}>A Relação entre DTM e Zumbido</Text>
                <Text style={styles.text2}>
                    O zumbido é um som incômodo no ouvido sem fonte externa, e até 52% dos pacientes com DTM apresentam esse sintoma. {"\n"}
                    {"\n"}
                    • A relação ocorre devido à proximidade anatômica da ATM com o ouvido. {"\n"}
                    {"\n"}
                    • O zumbido pode estar associado aos músculos da mastigação. {"\n"}
                    {"\n"}
                    • O tratamento da DTM pode reduzir zumbido. {"\n"}
                    {"\n"}
                    Essa conexão evidencia como a DTM pode afetar não apenas a ATM, como a percepção auditiva. {"\n"}
                </Text>

                <Text style={styles.title2}>Quando procurar ajuda?</Text>
                <Text style={styles.text}>
                    É importante procurar um profissional especializado caso apresente: {"\n"}
                    {"\n"}
                    • Dor na face. {"\n"}
                    {"\n"}
                    • Dificuldade para abrir a boca. {"\n"}
                    {"\n"}
                    • Estalos frequentes. {"\n"}
                    {"\n"}
                    • Zumbido persistente. {"\n"}
                    {"\n"}
                    O diagnóstico precoce e o tratamento adequado ajudam a evitar complicações e melhoram a qualidade de vida. {"\n"}
                </Text>

                <Text style={styles.title1}>DTM em crianças e adolescentes: atenção desde cedo</Text>
                <Text style={styles.text2}>
                    A DTM também pode afetar crianças e adolescentes, sendo importante observar sinais precoces. {"\n"}
                </Text>

                <Text style={styles.title2}>Sintomas comuns</Text>
                <Text style={styles.text2}>
                    • Dor de cabeça, dor perto da orelha ou na face. {"\n"}
                    {"\n"}
                    • Sensibilidade ao toque nos músculos da mastigação. {"\n"}
                    {"\n"}
                    • Fadiga ao mastigar. {"\n"}
                    {"\n"}
                    • Estalos ou ruídos na mandíbula. {"\n"}
                    {"\n"}
                    • Limitação da abertura da boca. {"\n"}
                    {"\n"}
                    • Zumbido, sensação de ouvido tampado ou vertigem. {"\n"}
                </Text>

                <Text style={styles.title2}>Fatores de risco</Text>
                <Text style={styles.text2}>
                    • Alterações posturais e tensão nos músculos do pescoço e das costas podem aumentar a probabilidade de DTM. {"\n"}
                </Text>

                <Text style={styles.title2}>Impacto da DTM na infância</Text>
                <Text style={styles.text2}>
                    A DTM pode afetar diversos aspectos da vida da criança, tornando essencial sua identificação precoce. {"\n"}
                    {"\n"}
                    Principais impactos: {"\n"}
                    {"\n"}
                    • Sono: dificuldade para dormir devido à dor. {"\n"}
                    {"\n"}
                    • Aprendizado: concentração prejudicada em atividades escolares. {"\n"}
                    {"\n"}
                    • Emoções: ansiedade, irritabilidade e mudanças de comportamento. {"\n"}
                    {"\n"}
                    • Relações sociais: desconforto ao falar ou mastigar na presença de colegas. {"\n"}
                </Text>

                <Text style={styles.title2}>Por que a informação é importante</Text>
                <Text style={styles.text2}>
                    Crianças podem desenvolver DTM mesmo sem sintomas graves no início, tornando a identificação precoce essencial. {"\n"}
                    {"\n"}
                    Principais pontos: {"\n"}
                    {"\n"}
                    • Pais, cuidadores e professores têm papel crucial na detecção dos sinais. {"\n"}
                    {"\n"}
                    • Intervenções conservadoras e não invasivas ajudam a prevenir dor e complicações futuras. {"\n"}
                    {"\n"}
                    • Educação em saúde por meio de histórias em quadrinhos e recursos visuais facilita a compreensão e o autocuidado. {"\n"}
                    {"\n"}
                    • Ensinar sobre DTM desde cedo promove saúde, prevenção da dor e melhora a qualidade de vida das crianças. {"\n"}
                </Text>

                <Text style={styles.title2}>Tratamentos e cuidados</Text>
                <Text style={styles.text}>
                    O manejo da DTM começa com educação do paciente e autocuidado, evitando hábitos que sobrecarregam a ATM, como roer unhas ou mascar chiclete. {"\n"}
                    {"\n"}
                    Principais abordagens: {"\n"}
                    {"\n"}
                    • Exercícios terapêuticos: relaxam músculos, melhoram mobilidade e reduzem dor. {"\n"}
                    {"\n"}
                    • Terapias manuais: aplicadas por profissionais especializados. {"\n"}
                    {"\n"}
                    • Farmacoterapia: uso de analgésicos, anti-inflamatórios, relaxantes musculares ou antidepressivos, quando necessário. {"\n"}
                    {"\n"}
                    • Terapias reversíveis: aparelhos interoclusais, técnicas de relaxamento ou terapia cognitivo-comportamental. {"\n"}
                    {"\n"}
                    Objetivo: controlar a dor, melhorar a função, fortalecer músculos, sempre com abordagem não invasiva e incentivando a participação ativa do paciente. {"\n"}
                </Text>

                <Text style={styles.title1}>Exercícios e autocuidado</Text>
                <Text style={styles.text}>
                    Os exercícios para DTM podem ser realizados em casa (auto-exercício) ou com orientação de um profissional. {"\n"}
                    {"\n"}
                    Benefícios dos exercícios: {"\n"}
                    {"\n"}
                    • Controlar a dor e desconforto muscular. {"\n"}
                    {"\n"}
                    • Relaxar músculos tensos e reduzir espasmos. {"\n"}
                    {"\n"}
                    • Restaurar mobilidade da mandíbula. {"\n"}
                    {"\n"}
                    • Melhorar postura e coordenação muscular. {"\n"}
                    O autocuidado fortalece a confiança do paciente, promove responsabilidade sobre a própria saúde e aumenta a eficácia do tratamento. {"\n"}
                </Text>

                <Text style={styles.title2}>Ainda não sabe como lidar com a DTM? Procure um profissional.</Text>
                <Text style={styles.text}>
                    Se caso precise de ajuda para lidar com a DTM, separamos o contato de alguns profissionais especializados na área para te ajudar. Lembre-se que um diagnóstico correto é o primeiro passo para um tratamento eficaz e uma melhor qualidade de vida.
                </Text>
                <View style={styles.buttons}>
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
    },
    content: {
        flex: 1,
        padding: 20,
        paddingTop: "5%"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginTop: '2%',
        marginBottom: '2%',
    },
    title1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
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
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: '2%',
    },
    title4: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff"
    },
    text: {
        fontSize: 14,
        color: "#fff",
        textAlign: 'justify',
        marginTop: '2%',
        marginBottom: '8%',
    },
    text2: {
        fontSize: 14,
        color: "#fff",
        textAlign: 'justify',
        marginTop: '2%',
        marginBottom: '1%',
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
        borderRadius: 8,
        alignSelf: "center",
        width: 200,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "4%"
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
