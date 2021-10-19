import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api";
import Publicacoes from "../../Components/publicações";
import { List } from './styles';
import vitin from '../../assets/user_image.jpeg'
import { useDispatch, useSelector } from "react-redux";

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
