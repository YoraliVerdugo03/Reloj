import React from 'react';
import { SafeAreaView } from 'react-native';
import Reloj from './Reloj'; // Asegúrate de usar la ruta correcta

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Reloj />
        </SafeAreaView>
    );
};

export default App;