import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={Styles.backgroundStyle}>
      <Feather name="search" style={Styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={Styles.inputStyle}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
