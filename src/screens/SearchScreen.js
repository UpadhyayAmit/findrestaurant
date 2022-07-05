import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
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
        />
        <ResultsList title="Bit Pricier" results={filterResultByPrice('$$')} />
        <ResultsList
          title="Big Spender"
          results={filterResultByPrice('$$') || filterResultByPrice('$$$$')}
        />
      </ScrollView>
    </>
  );
};

const Styles = StyleSheet.create({});

export default SearchScreen;
