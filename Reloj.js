import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const Reloj = () => {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
      const intervalo = setInterval(() => {
          setHoraActual(new Date());
      }, 1000);

      return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
      <View style={styles.contenedor}>
          <Text style={styles.hora}>
              {horaActual.toLocaleTimeString()} {/* Muestra la hora en formato local */}
          </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#282c34',
  },
  hora: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#61dafb',
  },
});

export default Reloj;
