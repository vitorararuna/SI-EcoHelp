import styled from 'styled-components/native';
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { placeholder } from '@babel/types';


export const SearchContent = styled.View`
    /* flex: 1; */
    align-self: center;
    flex-direction: row;
    text-align: center;
    align-items: center;
    /* bottom: 80px; */
`;

export const Search = styled(TextInput).attrs({
    placeholder: "    PESQUISE AQUI",
    autoCorrect: false,
})`
    width: 280px;
    height:65px;
    background: #fff;
    border: 3px #2EAE01 solid;
    border-radius: 22px;
`;


