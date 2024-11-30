import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons'
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <Drawer screenOptions={{ headerShown: true }}>
          <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Início',
            title: 'Bem-vindo',
          }}
        />
         <Drawer.Screen
          name="form" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Formulário',
            title: 'Cadastro',
          }}
        />
         <Drawer.Screen
                    name="stack/index"
                    options={{
                        drawerLabel: 'Stack',
                        title: 'Stack',
                    }}
          />
      </Drawer>
    </GestureHandlerRootView>
  );
}
