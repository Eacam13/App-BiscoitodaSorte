import React, { useState } from 'react'
import { Container, Imagem, Botao, Texto, TextoBotao } from './styles'
import { frases } from '../../utils/ListadeFrases'

export default function Home() {
    const [frase, setFrase] = useState('');
    const [imagem, setImagem] = useState(require('../../../assets/biscoito.png'));

    const abrirBiscoito = () => {
        let fraseAleatoria = Math.floor(Math.random() * frases.length)
        setFrase(`"${frases[fraseAleatoria]}"`)
        setImagem(require('../../../assets/biscoitoAberto.png'))

    }
    return (
        <Container>
            <Imagem source={imagem} />
            <Botao onPress={() => abrirBiscoito()}>
                <TextoBotao>Abrir biscoito</TextoBotao>
            </Botao>
            <Texto>{frase}</Texto>
        </Container>
    )
}