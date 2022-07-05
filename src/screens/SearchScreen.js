import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultByPrice('$')}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultByPrice('$$')}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultByPrice('$$') || filterResultByPrice('$$$$')}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const Styles = StyleSheet.create({});

export default SearchScreen;
