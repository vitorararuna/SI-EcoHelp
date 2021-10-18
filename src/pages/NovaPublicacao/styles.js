import styled from 'styled-components/native';
import { RectButton, ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from 'react-native';

export const Content = styled.View`
    flex: 1;
    margin: 20px 15px 10px 15px;
    padding: 20px 0px 0px 20px;
    background-color: #E5E5E5;

`;

export const Publicar = styled(RectButton).attrs({
})`
  background: #2EAE01;
  border-radius: 4px;
  padding: 10px;
`;

export const Voltar = styled(RectButton).attrs({
})`
  background: red;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #2EAE01;
`;

export const InputTitle = styled(TextInput).attrs({
    placeholder: "Digite aqui o título da publicação",
    autoCorrect: false,
})`
 
`;

export const Type = styled.Text`
    font-size: 25px;
    font-weight: bold; 
    margin-top: 60px;
    color: #2EAE01;

`;

export const TypeOptions = styled.View`
    flex-direction: row;
`;

export const Dica = styled.Text`
    /* ${props => props.set ? "palevioletred" : "white"}; */
    margin: 18px 20px 0px 0px;
    background-color: #E7FEE1;
    padding: ${props => props.set ? "12px" : "7px"};
    border-radius: 15px;
    font-weight: ${props => props.set ? "bold" : "normal"};
    font-size: 15px;
`;

export const Discussao = styled.Text`
    margin: 18px 20px 0px 0px;
    background-color: #F6E1FE;
    padding: ${props => props.set ? "12px" : "7px"};;
    border-radius: 15px;
    font-weight: ${props => props.set ? "bold" : "normal"};
    font-size: 15px;
`;

export const Noticia = styled.Text`
    margin: 18px 20px 0px 0px;
    background-color: #E1ECFE;
    padding: ${props => props.set ? "12px" : "7px"};;
    border-radius: 15px;
    font-weight: ${props => props.set ? "bold" : "normal"};
    font-size: 15px;
`;

export const Pergunta = styled.Text`
    margin: 18px 20px 0px 0px;
    background-color: #FFF2E2;
    padding: ${props => props.set ? "12px" : "7px"};;
    border-radius: 15px;
    font-weight: ${props => props.set ? "bold" : "normal"};
    font-size: 15px;
`;

export const Descricao = styled.Text`
    margin-top: 60px;
    font-size: 25px;
    font-weight: bold;
    color: #2EAE01;
`;

export const IputDescricao = styled(TextInput).attrs({
    placeholder: "Digite aqui a descrição da publicação",
    multiline: true,
    numberOfLines: 3,
    autoCorrect: false,
})`
 margin-bottom: 100px;
`;
