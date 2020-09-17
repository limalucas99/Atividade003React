import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

const ContactItem = (props) => {
    return(
        <TouchableOpacity onLongPress={ () => props.onDeleteContact(props.chave)}>
            <View style={style.contactList}>
                <Text>
                    {props.contact.name} 
                </Text>
                <Text>
                    {props.contact.number}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    contactList: {
        padding: 12,
        backgroundColor: '#DDD',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8
      }
});

export default ContactItem;