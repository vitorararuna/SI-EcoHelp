import styled from 'styled-components/native';
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { placeholder } from '@babel/types';
import { KeyboardAvoidingView, View, ImageBackground, Image, Text, StyleSheet, } from "react-native";


export const EcoHelp = styled.View`
    position: absolute;
    width: 113px;
    height: 118px;
    left: 28px;
    top: 23px;
    align-items: flex-start;
    border: 5px white solid;
    padding-left:5px;
`;
export const Eco = styled.Text`
    font-size:42px;
    font-weight: 800;
    color: white;
`;
export const Help = styled.Text`
    font-size:36px;
    color: white;
`;

export const SignContent = styled.View`
    position: absolute;
    width: 339px;
    height: 400px;
    left: 36px;
    top: 254px;

    background: #FCFCFC;
    border-radius: 5px;
`;

export const SignText = styled.Text`
    margin: 15px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
`;

export const JoinText = styled.Text`
    color: #2EAE01;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    align-self: center;
    font-size: 18px;
    line-height: 22px;
    margin-top: 15px;
`;

export const SignUpText = styled.Text`
    align-self: center;
    margin-top: 12px;
    margin-left: 9px;

`;


export const SignSpan = styled.Text`
    margin: 15px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    /* font-weight: bold; */

`;

export const Userinput = styled(TextInput).attrs({
    placeholder: "Usuário",
    autoCorrect: false,
})`
    margin-top: 25px;
    align-self: center;
    width: 280px;
    background: #F1F1F1;
    border-radius: 5px;
    /* border: 1px black solid; */
`;

export const Passinput = styled(TextInput).attrs({
    placeholder: "Senha",
    autoCorrect: false,
})`
    margin-top: 25px;
    align-self: center;
    width: 280px;
    background: #F1F1F1;
    border-radius: 5px;
    /* border: 1px black solid; */
`;

export const  Confirminput = styled(TextInput).attrs({
    placeholder: "Confirmar senha Senha",
    autoCorrect: false,
})`
    margin-top: 25px;
    align-self: center;
    width: 280px;
    background: #F1F1F1;
    border-radius: 5px;
    /* border: 1px black solid; */
`;

// export const Passinput = styled(TextInput).attrs({
//     placeholder: "Senha",
//     autoCorrect: false,
// })`
//     margin-top: 25px;
//     align-self: center;
//     width: 280px;
//     background: #F1F1F1;
//     border-radius: 5px;
// `;



