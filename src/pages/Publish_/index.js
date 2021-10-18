import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import fundo from '../../assets/fundo.jpeg'
import Publicacoes from "../../Components/publicações";
import { List } from './styles';
import vitin from '../../assets/vitin.jpeg'

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

export default function Publish({ navigation }) {

    const [userPublish, setUserPublish] = useState([]);

    async function loadUserPublishes() {
        // const response = await api.get('user');
        // setUserIfos(response.data);
        setUserPublish(DATA)
    }

    useEffect(() => {
        loadUserPublishes()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <List
                data={userPublish}
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
