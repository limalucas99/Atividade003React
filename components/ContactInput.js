import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ContactInput = (props) => {

  const [number, setNumber] = useState('');
  
  const getNumber = number => {
    setNumber(number)
  };

  const [name, setName] = useState('');
  
  const getName = name => {
    setName(name)
  };


  return(
    <View style={styles.inputView}>

      <TextInput style={styles.input} 
        placeholder="Digite o nome"
        value={name}
        onChangeText={getName}
      />

      <View>
        <TextInput style={styles.input}
          value={number}
          placeholder="Digite o número"
          onChangeText={getNumber}
        />        
      </View>

      <Button
        title="Enviar"
        onPress={() => {props.onAddContact({name, number})}}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 8
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 4,
    padding: 12,
    textAlign: 'center',
  }
});

export default ContactInput;