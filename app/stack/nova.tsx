import Botao from '@/components/Botao'
import styles from '@/constants/style'
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function TelaNova() {
    const router = useRouter()
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Text>Tela Nova</Text>
            <Botao onPress={() => {
                router.push('/stack')
            }}>
                <Link href="/stack" style={{ color: '#fff' }}>
                    Voltar
                </Link>
            </Botao>
        </View>
    )
}
