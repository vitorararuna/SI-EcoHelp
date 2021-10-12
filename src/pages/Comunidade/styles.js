import styled from 'styled-components/native';
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { placeholder } from '@babel/types';


export const SearchContent = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
    align-self: center;
    bottom: 30px;
`;

export const Search = styled(TextInput).attrs({
    placeholder: "Procurar",
    autoCorrect: false,
})`
    align-self: center;
    width: 280px;
    background: #fff;
    border: 3px black solid;
    border-radius: 22px;
    /* border: 1px black solid; */
`;


