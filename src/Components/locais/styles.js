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
    padding:10px;
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
    left: 180px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 17px;
    line-height: 16px;
    color: #24292E;
    margin-left: 9px;
    font-weight: bold;
`;

export const Tipo = styled.Text`
    font-weight: bold;
    font-size: 12px;
    line-height: 10px;
    color: #24292E;
    margin-left: 9px;
    margin-top: 3px;
    font-weight: bold;
`;


export const PostContent = styled.View`
    margin-top: 25px;
    height: auto;
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
    color: green;
`;

export const IconContent = styled.View`
  background-color: #8CD500;
  align-items: center;
  align-content: center;
  border-radius: 50px;
  width: 36px;
  height: 34px;
`;
