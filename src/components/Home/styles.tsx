import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #7321cb;
    align-items: center;
    justify-content: center;
`
export const Imagem = styled.Image`
    width: 250px;
    height: 250px;
`
export const Botao = styled.TouchableOpacity`
    width: 180px;
    height: 40px;
    border-radius: 30px;
    border: 2px solid #f8fcfc;
    background-color: #00d4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 40px;
`
export const TextoBotao = styled.Text`
    color: #020024;
    font-size: 16px;
    font-weight: bold;
`
export const Texto = styled.Text`
    color: #f0f5f4;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
`