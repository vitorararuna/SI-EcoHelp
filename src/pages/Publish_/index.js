import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api";
import Publicacoes from "../../Components/publicações";
import { List } from './styles';
import vitin from '../../assets/vitin.jpeg'
import { useDispatch, useSelector } from "react-redux";


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

    const _user_ = useSelector(state => state.user);
    const [userPublish, setUserPublish] = useState([]);


    useEffect(() => {
        async function loadPublishesUser() {
            const response = await api.get('publication/', {
                params: {
                    user__username: _user_.username,
                }
            });
            await setUserPublish(response.data)
            console.log(userPublish)

        }
        loadPublishesUser()
        // console.log(userPublish)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {userPublish.length > 0 &&
                <List
                    data={userPublish}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Publicacoes
                            photo={vitin}
                            name={_user_.name}
                            user={`@${_user_.username}`}
                            title={item.title}
                            spam={item.body}
                            likes={item.upvotes}
                            coments={item.comments}
                            id={item.id}
                        />
                    )}
                />
            }
        </SafeAreaView>
    )
}
