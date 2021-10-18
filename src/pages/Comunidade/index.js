import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { SearchContent, Search, List } from './styles'
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import vitin from '../../assets/vitin.jpeg';
import Publicacoes from "../../Components/publicações";

const DATA = [
    {
        id: '1',
        foto: vitin,
        name: 'Vitor Araruna',
        user: '@vitorararuna',
        title: 'O que vocês fizeram com seus livros didáticos da época de escola ?',
        spam: 'To cheia de livro didático do ensino fundamental/médio e não tenho ideia do que fazer. Pensei em doar mas já estão desatualizados, não sei se aceitariam. Tentei procurar centros de reciclagem aqui na minha cidade mas todos são de produtos plásticos, etc.',
        likes: 2,
        coments: 3

    },
    {
        id: '2',
        foto: vitin,
        name: 'Vitor Araruna',
        user: '@vitorararuna',
        title: 'O que vocês fizeram com seus livros didáticos da época de escola ?',
        spam: 'To cheia de livro didático do ensino fundamental/médio e não tenho ideia do que fazer. Pensei em doar mas já estão desatualizados, não sei se aceitariam. Tentei procurar centros de reciclagem aqui na minha cidade mas todos são de produtos plásticos, etc.',
        likes: 2,
        coments: 3
    },
    {
        id: '3',
        foto: vitin,
        name: 'Vitor Araruna',
        user: '@vitorararuna',
        title: 'O que vocês fizeram com seus livros didáticos da época de escola ?',
        spam: 'To cheia de livro didático do ensino fundamental/médio e não tenho ideia do que fazer. Pensei em doar mas já estão desatualizados, não sei se aceitariam. Tentei procurar centros de reciclagem aqui na minha cidade mas todos são de produtos plásticos, etc.',
        likes: 2,
        coments: 3
    },
    {
        id: '4',
        foto: vitin,
        name: 'Vitor Araruna',
        user: '@vitorararuna',
        title: 'O que vocês fizeram com seus livros didáticos da época de escola ?',
        spam: 'To cheia de livro didático do ensino fundamental/médio e não tenho ideia do que fazer. Pensei em doar mas já estão desatualizados, não sei se aceitariam. Tentei procurar centros de reciclagem aqui na minha cidade mas todos são de produtos plásticos, etc.',
        likes: 2,
        coments: 3
    },
    {
        id: '5',
        foto: vitin,
        name: 'Vitor Araruna',
        user: '@vitorararuna',
        title: 'O que vocês fizeram com seus livros didáticos da época de escola ?',
        spam: 'To cheia de livro didático do ensino fundamental/médio e não tenho ideia do que fazer. Pensei em doar mas já estão desatualizados, não sei se aceitariam. Tentei procurar centros de reciclagem aqui na minha cidade mas todos são de produtos plásticos, etc.',
        likes: 2,
        coments: 3
    },
    {
        id: '6',
        foto: vitin,
        name: 'Vitor Araruna',
        user: '@vitorararuna',
        title: 'O que vocês fizeram com seus livros didáticos da época de escola ?',
        spam: 'To cheia de livro didático do ensino fundamental/médio e não tenho ideia do que fazer. Pensei em doar mas já estão desatualizados, não sei se aceitariam. Tentei procurar centros de reciclagem aqui na minha cidade mas todos são de produtos plásticos, etc.',
        likes: 2,
        coments: 3
    },
];

export default function Comunidade({ navigation }) {

    const [allPublishes, setAllPublishes] = useState([]);

    async function loadAllPublishes() {
        // const response = await api.get('user');
        // setUserIfos(response.data);
        setAllPublishes(DATA)
    }

    useEffect(() => {
        loadAllPublishes()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
                <SearchContent>
                    <Icon name="search1" size={31} color="white" style={styles.icon2} />
                    <Search />
                    <Icon2 name="options" size={31} color="white" style={styles.icon} />
                </SearchContent>
            </ImageBackground>
            <List
                data={allPublishes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Publicacoes
                        photo={item.foto}
                        name={item.name}
                        user={item.user}
                        title={item.title}
                        spam={item.spam}
                        likes={item.likes}
                        coments={item.coments}
                    />
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        width: 450,
        height: 100,
        opacity: 30,
    },
    icon: {
        marginLeft: 35,
    },
    icon2: {
        marginRight: 35,
    }

});