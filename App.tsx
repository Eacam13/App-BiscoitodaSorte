import { StatusBar } from 'react-native'
import  Home  from './src/components/Home'
import { Container } from './src/components/Home/styles'

export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Home />
    </Container>
  )
}
