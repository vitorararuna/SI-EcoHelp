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
  margin-top: 30px;
`;


export const Infos = styled.Text`
    font-size: 30px;
    font-weight: bold;
    align-self: center;
    color: #2EAE01;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #2EAE01;
    margin-bottom: 9px;
`;

export const Name = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const InputName = styled(TextInput).attrs({
    placeholder: "Digite aqui o nome do local",
    autoCorrect: false,
})`
 
`;

export const Type = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const InputType = styled(TextInput).attrs({
    placeholder: "Digite aqui o serviço ofertado",
    autoCorrect: false,
})`
 
`;

export const End = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const InputEnd = styled(TextInput).attrs({
    placeholder: "Digite aqui o endereço do local",
    autoCorrect: false,
})`
 
`;

export const Desc = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const InputDesc= styled(TextInput).attrs({
    placeholder: "Digite aqui uma descrição do local",
    autoCorrect: false,
})`
`;

export const Link = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const InputLink = styled(TextInput).attrs({
    placeholder: "Link para encontrarmos o local em suas redes sociais",
    autoCorrect: false,
})`
 
`;

export const Descricao = styled.Text`
    margin-top: 6px;
    margin-bottom: 9px;
    font-size: 25px;
    font-weight: bold;
    color: #2EAE01;
`;
