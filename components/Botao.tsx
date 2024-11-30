import React from "react";
import { Pressable, StyleSheet } from "react-native";

export interface BotaoProps {
    children: React.ReactNode;
    onPress: () => void;
}

export default function Botao(props: BotaoProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? 0.8 : 1 },
                localStyles.botao // Usando estilos locais para o botão
            ]}
            onPress={props.onPress}
        >
            {props.children}
        </Pressable>
    );
}

// Estilos locais renomeados para evitar conflito
const localStyles = StyleSheet.create({
    botao: {
        backgroundColor: '#3A7EFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
    },
});
