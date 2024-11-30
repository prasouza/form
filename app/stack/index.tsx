import Botao from '@/components/Botao'
import styles from '@/constants/style'
import { Text, View } from 'react-native'
import { Link, useRouter } from 'expo-router'

export default function TelaInicial() {
    const router = useRouter()
    return (
              <View style={[styles.centralizado, { gap: 10 }]}>
            <Text>Tela Inicial</Text>
            <Botao onPress={() => {
            }}>
                <Link href="/stack/nova" style={{ color: '#fff' }}>
                    Ir para Tela Nova
                </Link>
            </Botao>
            <Botao onPress={() => {
                router.push('/')
            }}>
                <Link href="/" style={{ color: '#fff' }}>
                    Ir para Início
                </Link>
            </Botao>
        </View>
    )
}
