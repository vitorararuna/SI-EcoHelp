import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,     // não mostrar inicador de scrool
    contentContainerStyle: { paddingBottom: 40}, // estilo relacionado apenas ao conteúdo da lista
})`

width: 100%;
  `;