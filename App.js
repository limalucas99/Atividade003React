import { StatusBar, setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ContactItem from './components/contactItem';
import ContactInput from './components/ContactInput';

export default function App() {

  const [counter, setCounter] = useState(10);
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts(contacts => {
      setCounter(counter + 2);
      return [...contacts, {key: counter.toString(), value: contact}]
    })
  };


  const removeContact = (key) => {
    setContacts((contacts) => {
      return contacts.filter(contact => contact.key != key )
    })
  };

  return (
    <View style={styles.container}>
      <ContactInput onAddContact={addContact}/>
      <FlatList 
        data={contacts}
        renderItem={
          (contact) => (
            <View style={styles.contactsList}>
              <ContactItem onDeleteContact={removeContact} contact={contact.item.value} chave={contact.item.key}/>
            </View>
          )
        }
      />        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
