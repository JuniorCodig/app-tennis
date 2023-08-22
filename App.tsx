import React from 'react';
import { View, Text } from 'react-native';
import { City } from './src/componenet/city';
import styled from 'styled-components/native';

export const CenteredView = styled.View`
 align-items: center;
`;

export const Container = styled.View`
  justify-content: center; // Centraliza verticalmente
  align-items: center;    // Centraliza horizontalmente
`;

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center', // Centraliza verticalmente
      alignItems: 'center',   // Centraliza horizontalmente
    }}>
      <View>

        <City />
      </View>
    </View>
  );
}



