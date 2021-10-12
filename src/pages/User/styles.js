import styled from 'styled-components/native';
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { placeholder } from '@babel/types';


export const UserName = styled.Text`
    position: absolute;
    width: 236px;
    height: 20px;
    left: 210px;
    top: 115px;
    margin-top:5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 22px;

    color: #000000;
`;

export const UserLogin = styled.Text`
    position: absolute;
    width: 125px;
    height: 13px;
    left: 210px;
    top: 135px;
    margin-top:9px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 15px;
    display: flex;
    align-items: center;

    color: #000000;
`;

export const TabContainer = styled.View`
  justify-content: space-between;
  padding-right: 85px;
  padding-left:85px;
  flex-direction: row;
  top:200px;
  height:40px;
  width:100%;
`;


export const Photo = styled.Image`
    position: absolute;
    width: 165px;
    height: 165px;
    left: 28px;
    top: 23px;
    border-radius: 500px;
`;



