import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={Styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    borderRadius: 4,
    height: 120,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ResultsDetails;
