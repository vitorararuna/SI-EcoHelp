import styled from 'styled-components/native';
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { placeholder } from '@babel/types';


export const Content = styled.View`
    /* position: absolute; */
    width: 400px;
    height: auto;
    align-self: center;
    background: #FCFCFC;
    border-radius: 5px;
    margin-top: 12px;
    padding:5px;
    border: 2px #2EAE01 solid;
`;

export const UserContent = styled.View`
   flex-direction: row;
   /* align-items: center; */
`;

export const UserInfos = styled.View`
   /* flex-direction: row; */
   /* align-items: center; */
`;

export const IconsContent = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
    left: 230px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    color: #24292E;
    margin-left: 9px;
    font-weight: bold;
`;

export const User = styled.Text`
    font-weight: bold;
    font-size: 11px;
    line-height: 10px;
    color: #24292E;
    margin-left: 9px;
    margin-top: 3px;
    font-weight: bold;
`;



export const Photo = styled.Image`
    width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 50px;
    border: 3px #069B49 solid;
`;

export const PostContent = styled.View`
    margin-top: 25px;
    /* flex-direction: row;
    margin-bottom: 5px;
    left: 200px; */
`;

export const Title = styled.Text`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #24292E;
`;

export const Spam = styled.Text`
    margin-top: 8px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #24292E;
`;

export const InfosPostContent = styled.View`
    flex-direction: row;
    align-content: space-around;
    margin-top: 38px;
`;
export const Text_ = styled.Text`
    align-items: center;
    margin: 8px;
`;

export const Filter_ = styled.View`
    align-items: center;
    padding: 3px;
    border-radius:15px;
    align-self: center;
    left: 210px;
    margin-left: 2%;
`;


export const List_coments = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,     // não mostrar inicador de scrool
    contentContainerStyle: { flexGrow: 1 }, // estilo relacionado apenas ao conteúdo da lista
})`

  `;

export const IputComent = styled(TextInput).attrs({
    placeholder: "escreva aqui",
    multiline: true,
    numberOfLines: 2,
    autoCorrect: false,
})`
 margin-bottom: 100px;
`;

export const NewComent = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
    height: 225px;
`;

export const Coment = styled.Text`
    font-weight: bold;
    margin-top: 15px;
    margin-left: 5px;
    font-size: 20px;
`;
